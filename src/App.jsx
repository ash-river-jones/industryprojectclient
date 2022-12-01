import './App.scss';

import Home from './pages/Home/Home'
import About from './pages/About/About'
import Form from './pages/Form/Form'
import Welcome from './pages/Welcome/Welcome';

import { BrowserRouter, Routes, Route } from 'react-router-dom'


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Form />} />
          <Route path='/about' element={<About />} />
          <Route path='/form' element={<Form />} />
          <Route path='/welcome' element={<Welcome />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}