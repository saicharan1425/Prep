import { useState,useEffect } from "react"


function ReactQuest() {

    let [count,setCount]= useState(0);
    let [name,setName] = useState('')

    useEffect(()=>{
        console.log('rendering');
        document.title= 'Count: '+ count
    },[count])

  return (
    <>
    <div>ReactQuest</div>
    <input value={name} onChange={(e)=>setName(e.target.value)}/>
    <button onClick={()=>setCount(count +1)}>click</button>
    </>
  )
}

export default ReactQuest