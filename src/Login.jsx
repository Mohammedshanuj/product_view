import React, { useEffect, useRef } from 'react';



function Login() {
  const renderun=useRef(0)
  useEffect(()=>{
    renderun.current.focus()
  })
  return (
    <><div><div><a href="#!">need to loging</a> </div>
      <div><label htmlFor="">Username: <input id="username" ref={renderun} type="text" /></label></div>
      <div><label htmlFor=""> Password: <input type="password" /></label></div>
      <button>Submit</button></div></>
  )
}

export default Login