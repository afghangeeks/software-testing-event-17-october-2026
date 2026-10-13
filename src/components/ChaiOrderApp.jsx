// ChaiOrderApp.jsx: connects ChaiCounter and AfghanGreeting for a complete ordering experience
'use client'
import { useState } from 'react'
import ChaiCounter from './Counter'
import AfghanGreeting from './Greeting'

export default function ChaiOrderApp() {
  const [orderCount, setOrderCount] = useState(0)

  const handlePlaceOrder = (count) => {
    setOrderCount(count)
  }

  return (
    <main>
      <h1>Chai Ordering App</h1>
      <ChaiCounter onPlaceOrder={handlePlaceOrder} />
      <AfghanGreeting orderCount={orderCount} />
    </main>
  )
}
