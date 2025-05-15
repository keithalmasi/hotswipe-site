import React, { useState } from 'react'

// Dummy profiles for swipe demo
const profiles = [
  { id: 1, name: 'Alice', img: 'https://randomuser.me/api/portraits/women/21.jpg' },
  { id: 2, name: 'Bob', img: 'https://randomuser.me/api/portraits/men/34.jpg' },
  { id: 3, name: 'Cara', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
]

export default function HotSwipe() {
  const [index, setIndex] = useState(0)

  function swipeRight() {
    setIndex((prev) => (prev + 1) % profiles.length)
  }

  function swipeLeft() {
    setIndex((prev) => (prev + 1) % profiles.length)
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <img
        src={profiles[index].img}
        alt={profiles[index].name}
        style={{ width: 200, borderRadius: 10, marginBottom: 10 }}
      />
      <h2>{profiles[index].name}</h2>
      <button onClick={swipeLeft} style={{ marginRight: 10 }}>
        Not Hot
      </button>
      <button onClick={swipeRight}>Hot 🔥</button>
    </div>
  )
}
