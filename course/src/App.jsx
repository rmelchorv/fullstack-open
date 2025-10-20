function Header(props) {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}
function Content(props) {
  return (
    <div>
    {
      props.parts.map((part, i) => (
        <p key={i}>{part} {props.exercises[i]}</p>
      ))
    }
    </div>
  )
}
function Total(props) {
  const total = props.total.reduce((accum, current) => accum + current, 0);

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
