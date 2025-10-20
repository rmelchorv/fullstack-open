function Header(props) {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}
function Part(props) {
  return (
    <>
      <p>{props.name} {props.number}</p>
    </>
  )
}
function Content(props) {
  return (
    <>
    {
      props.parts.map((part, i) => (
        <Part name={part} number={props.exercises[i]} />
      ))
    }
    </>
  )
}
function Total(props) {
  const total = props.total.reduce((sum, item) => sum + item, 0);

  return (
    <>
      <p>Number of exercises {total} </p>
    </>
  )
}

function App() {
  const course = "Half stack application development"
  const parts = [
    "Fundamentals of React", "Using props to pass data", "State of a component",
  ]
  const exercises = [ 10, 7, 14 ]

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts} exercises={exercises} />
      <Total total={exercises} />
    </div>
  )
}

export default App
