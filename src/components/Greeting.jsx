// AfghanGreeting.jsx: fetches user data and shows greeting
'use client'
import { useState, useEffect } from 'react'

export default function AfghanGreeting() {
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/user')
      .then(res => res.json())
      .then(data => {
        setName(data.name)
        setLoading(false)
      })
  }, [])

  if (loading) return <div>Loading...</div>
  return <div>Salam, {name}! Welcome!</div>
}
