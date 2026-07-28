
import './App.css'
import { JsQuest } from './JsQuest'
import { ReactQuest } from './ReactQuest'
import { useState } from 'react'


function App() {

  const [log, setlog] = useState(true)
  
  function onlogbtn(){

    setlog(!log)

  }

  return (
    <>
 
    <div className='header'>
     <img alt='FEQ-logo'/> 
      <input className='search' name='search' type='search' placeholder='Search'/>
      <button className='logbtn' onClick={onlogbtn}>{log ? 'logOut' : 'login'}</button>
      <button>Profile</button>
    </div>
       <h1>Front-End Quest</h1>
       <JsQuest/>
      <ReactQuest/>
    </>
  )
}

export default App
