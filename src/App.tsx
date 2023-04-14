import { ChangeEvent, useState } from 'react'
import './App.css'
import List from './List'

function App() {
  // const drinks : string[] = ['MONSTER ULTRA CITRON', 'MONSTER ULTRA VIOLET', 'MONSTER ULTRA PARADISE', 'MONSTER MANGO LOCO', 'MONSTER PIPE LINE PUNCH' ]
  const [drinks, setDrinks] = useState(['MONSTER ULTRA CITRON', 'MONSTER ULTRA VIOLET', 'MONSTER ULTRA PARADISE', 'MONSTER MANGO LOCO', 'MONSTER PIPE LINE PUNCH' ]);
  const [value, setValue] = useState("hello");

  const handleChange = (event : ChangeEvent) => {
    console.log(event.target.getAttribute(value))
    // const { value } = event.target
    // setValue(event.target)
  }

  return (
    <div className="App">
      <input value={value} onChange={handleChange} />
      <button>Add</button>
      <List listItems={drinks} />
    </div>
  )
}

export default App