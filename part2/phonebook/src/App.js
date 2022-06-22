import React, { useState, useEffect } from "react";
import Filter from './components/Filter';
import PersonalForm from './components/PersonForm';
import Persons from './components/Persons'
import personsService from './services/personsService'
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newFilter, setFilter] = useState('');
  const [message, setMessage] = useState(null);
  const [style, setStyle] = useState({
    padding: 10,
    fontSize: 20,
    background: 'lightgray',
    borderStyle: 'solid',
    borderRadius: 5,
    marginBottom: 10
  })

  useEffect(() => {
    personsService.getAll().then(reponse =>
      setPersons(reponse));
  }, [])

  const handleChangePerson = (event) => {
    setNewName(event.target.value);
  }

  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterName = (event) => {
    setFilter(event.target.value);
  }

  const handleAddPerson = (event) => {
    event.preventDefault();

    if (!persons.some(person => person.name === newName)) {

      const newPersons = {
        name: newName,
        number: newNumber
      }

      personsService.create(newPersons)
      .then(response => {
        setPersons(persons.concat(response))
        setStyle({ ...style, color: 'green', borderColor: 'green' })
        setMessage(`Added ${newName}`)
        setNewName('');
        setNewNumber('');
  
        setTimeout(() => {
  
          setMessage(null);
  
        }, 5000)
        
      }).catch(error => {
        setStyle({ ...style, color: 'red', borderColor: 'red' })
        setMessage(`${error.response.data}`)
        setNewName('');
        setNewNumber('');
  
        setTimeout(() => {
  
          setMessage(null);
  
        }, 5000)
      });

    

    } else {

      const personFinder = persons.find(person => person.name === newName);

      if (window.confirm(`${personFinder.name} is already added to phonebook, replace the old number whit the new number`)) {
        personsService.update(personFinder.id, { ...personFinder, number: newNumber }).then(response => {
          setPersons(persons.map(person => person.name === response.name ? response : person))
        }).catch((err) => {
          setStyle({ ...style, color: 'red', borderColor: 'red' })
          setMessage(`Information of ${personFinder.name} has already been removed from server`);
        });

        setTimeout(() => {

          setMessage(null);

        }, 5000)

        setNewName('');
        setNewNumber('');
      }
    }
  }

  const handleDeletePerson = (event) => {

    const child = event.target.parentNode.firstChild.outerText.split(' ');

    const name = child.slice(0, 2).join(' ')

    if (window.confirm(`Delete ${name}`)) {
      const idPerson = Number(event.target.parentNode.id);

      personsService.deletePerson(idPerson).then(() => {
        setPersons(persons.filter(person => person.id !== idPerson), [])
      })
    }
  }

  return (
    <div>
      <h2>PhoneBook</h2>
      <Notification message={message} style={style} />
      <Filter handleFilter={handleFilterName} />

      <h3>Add a new</h3>
      <PersonalForm handleChangeNumber={handleChangeNumber} handleChangePerson={handleChangePerson} handleAddPerson={handleAddPerson} newName={newName} newNumber={newNumber} />

      <h2>Numbers</h2>
      <Persons filter={newFilter} persons={persons} handleDeletePerson={handleDeletePerson} />
    </div>
  )
}

export default App;