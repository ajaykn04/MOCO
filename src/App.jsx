import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Addm from './component/Addm';
import Viewm from './component/Viewm';
import Log from './component/Log';




function App() {
  
  document.body.style.backgroundColor = '#0f0f0f';

  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/addmovies' element={<Addm/>}/>
            <Route path='/viewmovies' element={<Viewm/>}/>
            <Route path='/login' element={<Log/>}/>
          </Routes>
        </BrowserRouter>
      </>
  )
}

export default App
