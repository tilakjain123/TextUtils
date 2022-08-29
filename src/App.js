import './App.css';
import React, { useState } from 'react'

import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  const[mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enable", "success")
      // document.title = "This is dark" // dynamically change title
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "success")
    }
  }
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
        msg: message,
        type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
}
  return (
    <>
    <BrowserRouter>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
        <Route exact path='/about' element={<About mode={mode} toggleMode={toggleMode}/>}/>
        <Route exact path='/' element={<Textform heading="Text Converter" showAlert={showAlert} mode={mode}/>}/>
      </Routes>
      {/* <About/> */}
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
