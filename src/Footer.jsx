import React from 'react'

export default function Footer() {
  return (
    <footer style={{ marginTop: 40, textAlign: 'center', fontSize: 14, color: '#666' }}>
      <p>
        Follow us on{' '}
        <a href="https://x.com/hotcoinsol" target="_blank" rel="noopener noreferrer">
          X (Twitter)
        </a>
      </p>
      <p>
        Share on:{' '}
        <a
          href="https://twitter.com/intent/tweet?text=Check%20out%20HotSwipe,%20the%20hottest%20dating%20app%20for%20Hotcoin%20holders!&url=https://hotswipe.example.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginRight: 10 }}
        >
          Twitter
        </a>
        <a
          href="https://www.facebook.com/sharer/sharer.php?u=https://hotswipe.example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
      </p>
    </footer>
  )
}
