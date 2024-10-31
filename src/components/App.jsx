import { useState } from 'react';
import './App.css';
import Feedback from './Footer/Feedback.jsx';
import Header from './Header/Description.jsx';
import Options from './Main/Options/Options.jsx';

function App() {
 

  return (
    <>
      <Header />
         <Options />
      <Feedback />
    </>
  )
}

export default App
