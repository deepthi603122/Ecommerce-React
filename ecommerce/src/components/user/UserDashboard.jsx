import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import UserNav from './UserNav'

function UserDashboard() {

  
  return (
    <div>
        <UserNav/>
        {/* <button onClick={()=>navigate("/userDashboard/cart")}>Cart</button> */}

        <Outlet/>   
        {/*this Outlet bcoz it is nested-------------------------------------------  */}
        {/* u can now apply the index in the route */}
    </div>
  )
}

export default UserDashboard