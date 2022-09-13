
import React, { useEffect, useState } from 'react'

function User_fetch(Component) {
    const NewComponent=(props)=>{
    const[User,setUser]=useState([])
    useEffect(()=>{
        fetch("https://dummyjson.com/users")
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);
            setUser(data.users)
            
        })

    },[])
    
  return <Component users={User}></Component>  ;
  }
  return NewComponent;
  
}

export default User_fetch
