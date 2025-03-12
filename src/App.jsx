import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/main'
import Project from './pages/project'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter >
      <div className=' '>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/project/:name" element={<Project />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
