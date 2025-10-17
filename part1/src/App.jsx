const App = () => {
  const friends = [
    { name: 'Freddy', age: 10 },
    { name: 'Ted', age: 12 },
  ]
  const partners = ['Mario', 'Luigi'  ]

  return (
    <div>
      <h2>Friends</h2>
      <p>{friends[0].name}, {friends[0].age}</p>
      <p>{friends[1].name}, {friends[1].age}</p>
      <h2>Partners</h2>
      <p>{partners[0]}, {partners[1]}</p>
    </div>
  )
}

export default App
