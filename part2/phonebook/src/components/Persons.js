const Persons = ({ filter, persons, handleDeletePerson }) => {

	return (
		<div>
			{persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())).map(person => {
				return (
					<div key={person.id} id={person.id}>
						<span>{person.name} {person.number}</span>
						<button onClick={handleDeletePerson}>delete</button>
					</div>

				)
			})}
		</div>
	)
}

export default Persons;