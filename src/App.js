
import './App.css';
// import QrCode from './ReactAdvance/Code-Spliting/QR-Code-Generate' 
import QrCode from './ReactAdvance/Code-Spliting/QR-code-reader' 

import React ,{useState,useRef } from 'react';

function App() {

 
  return (
    <div className="App">
      <QrCode />
    </div>
  );
}

export default App;
