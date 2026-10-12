// ChaiCounter.jsx: a button to count chai (tea) orders
'use client'
import { useState } from 'react'

export default function ChaiCounter() {
  const [count, setCount] = useState(0)
  const addChai = () => setCount(count + 1)

  return (
    <button onClick={addChai}>
      🫖 Chai Orders: {count}
    </button>
  )
}
