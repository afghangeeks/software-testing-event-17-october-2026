// ChaiCounter.jsx: manages chai order count with Add and Place Order buttons
'use client'
import { useState } from 'react'

export default function ChaiCounter({ onPlaceOrder }) {
  const [count, setCount] = useState(0)
  const addChai = () => setCount(count + 1)
  const placeOrder = () => {
    if (count > 0 && onPlaceOrder) {
      onPlaceOrder(count)
    }
  }

  return (
    <div>
      <button onClick={addChai}>Add Chai</button>
      <span> 🫖 Orders: {count}</span>
      <button onClick={placeOrder} disabled={count === 0}>
        Place Order
      </button>
    </div>
  )
}
