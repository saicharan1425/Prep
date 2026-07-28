import { useState } from "react"

export const Navbar = () =>{

    const [log, setlog] = useState(true)
  
  function onlogbtn(){

    setlog(!log)

  }

    return(
        
        <div className='header'>
     <img alt='FEQ-logo'/> 
      <input className='search' name='search' type='search' placeholder='Search'/>
      <button className='logbtn' onClick={onlogbtn}>{log ? 'logOut' : 'login'}</button>
      <button className="profile"><img alt='Avatar' className="avatar"/></button>
    </div>

    )
}