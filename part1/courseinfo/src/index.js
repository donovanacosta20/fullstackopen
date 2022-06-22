import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = ({ course }) => {
  return (
    < div >
      <h1>{course}</h1>
    </div >
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      <Part nombre={parts[0].name} exercises={parts[0].exercises} />
      <Part nombre={parts[1].name} exercises={parts[1].exercises} />
      <Part nombre={parts[2].name} exercises={parts[2].exercises} />

    </div>
  )
}

const Part = ({ nombre, exercises }) => {
  return (
    <div>
      <p>{nombre} {exercises}</p>
    </div>
  )
}

const Total = ({ parts }) => {

  return (
    <div>
      <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
    </div>
  )

}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div >
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
