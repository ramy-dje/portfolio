import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/main'
import Project from './pages/project'

function App() {
  
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    // Check if the flag exists in sessionStorage
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (!hasVisited) {
        // First time visit, disable scrolling
        document.body.style.overflow = "hidden";

        sessionStorage.setItem("hasVisited", "true"); // Store boolean as string
    }else{

    }
  },[])
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
