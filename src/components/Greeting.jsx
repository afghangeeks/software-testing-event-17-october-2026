// AfghanGreeting.jsx: fetches user data and shows order confirmation
'use client'
import { useState, useEffect } from 'react'

export default function AfghanGreeting({ orderCount }) {
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (orderCount > 0) {
      setLoading(true)
      fetch('/api/user')
        .then(res => res.json())
        .then(data => {
          setName(data.name)
          setLoading(false)
        })
    }
  }, [orderCount])

  if (loading) return <div>Loading...</div>
  if (orderCount > 0 && name) {
    return <div>Salam, {name}! Your {orderCount} chai order has been received.</div>
  }
  return null
}
