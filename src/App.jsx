
import './App.css'
import { JsQuest } from './JsQuest'
import  ReactQuest  from './ReactQuest'
import { Navbar } from './Navbar'
import { useState } from 'react'



function App() {

  const[topic,setTopic]=useState(null)

  
  function topicSelection(e){

    let topicValue = e.target.value;
  
    if(topicValue === 'js'){
      setTopic('js')
    }else if(topicValue==='react'){
      setTopic('react')
    }else{
      return null
    }
  }

  return (
    <>
 
    <Navbar/>
    <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
    <div className='title'>
       <h1>Hi Welcome to Front-End Quest</h1>
       <p>
        Here we are going to be on a Quest to learn and to master the Front-End 
       </p>
       </div>
      </div>
      <br/>
      <div style={{display:'flex', alignItems:'center', justifyContent:'center'}} >
       <button className='questOpeners' onClick={topicSelection} value={'js'}>JS Quest</button>
       <button className='questOpeners'onClick={topicSelection} value={'react'}>React Quest</button>
       </div>
      <div className='topic'>
       {topic=='js' ? <JsQuest/>: null }
       {topic=='react' ?  <ReactQuest/>: null }
       </div>
    </>
  )
}

export default App
