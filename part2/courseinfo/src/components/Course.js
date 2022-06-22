const Header = ({ name }) => {
    return (
        < div >
            <h1>{name}</h1>
        </div >
    )
}

const Content = ({ parts }) => {
    return (
        <div>
            {parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)}
        </div>
    )
}

const Part = ({ name, exercises }) => {
    return (
        <div>
            <p>{name} {exercises}</p>
        </div>
    )
}

const Total = ({ parts }) => {
    const total = parts.reduce((previous, current) => current.exercises + previous, 0)

    return (
        <div>
            <p><strong>Number of {total} exercises</strong></p>
        </div>
    )
}


const Course = ({ courses }) =>
    courses.map(course => {
        return (
            <div key={course.id}>
                <Header name={course.name} />
                <Content parts={course.parts} />
                <Total parts={course.parts} />
            </div>
        )
    });

export default Course;