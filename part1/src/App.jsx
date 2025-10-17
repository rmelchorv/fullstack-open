const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  console.log("Hello from component!")
  console.log(now, a+b)

  return (
    <div>
      <p>Hello world! It's {now.toString()}</p>
      <p>
        {a} plus {b} equals {a+b}
      </p>
    </div>
  )
}

export default App
