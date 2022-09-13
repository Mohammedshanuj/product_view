import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Login from './Login';
function WithAuth(Component) {
    const NewComponent=(props)=>{
    const loggedIn=true;
   

  return (<div>
    {loggedIn? <Component/> : <Login/> }
    </div>)
  }
  return NewComponent
}

export default WithAuth;
