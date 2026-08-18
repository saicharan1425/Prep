import { useEffect, useState } from "react";
import profile from './assets/Goku.jpeg';
import logo from './assets/Tower.jpeg';


export const Navbar = () =>{

    const [log, setlog] = useState(true)

    const [search, setSearch] = useState(null)

    useEffect(()=>{
      
    },[search])
  
  function onlogbtn(){
    setlog(!log)

  }

  function findData(e){
    setSearch(e.target.value)
    console.log(search);
    runSearch(e.target.value)
  }

  function runSearch(x){
    console.log('run '+x);
  }

    return(
        <>
      <div className='header'>
     <img alt='FEQ-logo' className="imagesmall" src={logo} /> 
     <div className="search-box">
      <input  onChange={findData} value={search} name='search' type='search' placeholder='Search'/>
      <button onClick={()=>{runSearch(search)}}>🔍</button>
      </div>
      <div className="userDetails">
      <button className='logbtn' onClick={onlogbtn}>{log ? 'logOut' : 'login'}</button>
      <button className="profile"  ><img alt='Avatar' src={profile}/></button>
      </div>
    </div>
    </>

    )
}