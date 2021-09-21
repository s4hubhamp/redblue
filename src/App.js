import { useState } from 'react'
import Box from './components/Box'
import { nanoid } from 'nanoid'

// declared outside so react don't assign it a value after each re-render
const boxes = new Array(16).fill(null)

function App() {
  const [currentRedBoxIndexes, setCurrentRedBoxIndexes] = useState([])

  console.log(currentRedBoxIndexes)

  const handleClick = index => {
    setCurrentRedBoxIndexes(prevRedBoxes => {
      if (prevRedBoxes.length === 2) {
        return prevRedBoxes.includes(index)
          ? [...prevRedBoxes]
          : [prevRedBoxes[1], index]
      }
      console.log(prevRedBoxes)
      return prevRedBoxes.includes(index)
        ? [...prevRedBoxes]
        : [...prevRedBoxes, index]
    })
  }

  return (
    <div className='App'>
      {boxes.map((b, idx) => (
        <Box
          key={nanoid(5)}
          colour={currentRedBoxIndexes.includes(idx) ? 'red' : 'blue'}
          handleClick={handleClick}
          index={idx}
        ></Box>
      ))}
    </div>
  )
}

export default App
