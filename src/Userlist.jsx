import React from 'react'
import User_fetch from './Userfetch';

function User_list(props) {
    const  {users}=props
    
    
  return (
    <div className='product_container'>
    
        {users && users.length > 0 && users.map((p)=>{
            return(
                <div key={p.id} className='product-wrapper'>
                    <img className='product-image' src={p.image} alt={p.phone} />
                    <h1>{p.lastName}</h1>
                    <h3>age : {p.age}</h3>
                    <h3>Sex : {p.gender}</h3>
                    <h3>Email : {p.email}</h3>
                    <h3>Phone : {p.phone}</h3>
                    <h3>DOB : {p.birtDate}</h3>
                    <h3>Bld Gp: {p.bloodGroup}</h3>
                    
                </div>
            )
        })}
      
    </div>
  )
}

export default User_fetch(User_list);
