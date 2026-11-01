import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main';

const Project = lazy(() => import('./pages/project'));

function App() {
  return (
    <BrowserRouter>
      <div className=" ">
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/project/:name" element={<Project />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
