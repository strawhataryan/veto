import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Veto - AI-Powered Innovation Rescue Platform</h1>
        <p>Rescuing and completing abandoned innovation projects</p>
      </header>
      <main className="app-main">
        <section className="hero">
          <h2>Welcome to Veto</h2>
          <p>Intelligent collaboration platform for rescuing abandoned projects</p>
        </section>
      </main>
      <footer className="app-footer">
        <p>&copy; 2024 Veto Platform. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
