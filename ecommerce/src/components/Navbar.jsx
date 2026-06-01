// import React from 'react'
// import { Link } from 'react-router-dom'


// function NavBar() {
//   return (
//     <div className="nav">
//       <h2>KK Store</h2>
//     <div className='links'>
//         <Link to="/">Home</Link>
//         <Link to="/login">Login</Link>
//         <Link to="/reg">Reg</Link>
        
//     </div>
//     </div>
//   )
// }

// export default NavBar




// import React from 'react'
// import { Link } from 'react-router-dom'

// function NavBar() {
//   return (
//     <nav className="navbar">

//       <div className="logo">
//         KK Store
//       </div>

//       <div className="navLinks">
//         <Link to="/">Home</Link>
//         <Link to="/userDashboard">Products</Link>
//         <Link to="/userDashboard/cart">Cart</Link>
//          <Link to="/about">About</Link>
//       </div>

//       <div className="navButtons">
//         <Link to="/login">
//           <button>Login</button>
//         </Link>

//         <Link to="/reg">
//           <button>Sign Up</button>
//         </Link>
//       </div>

//     </nav>
//   )
// }

// export default NavBar





import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">🛍️ KK Store</div>

      <div className="navLinks">
        <Link to="/">Home</Link>
        <Link to="/userDashboard">Products</Link>
        <Link to="/userDashboard/cart">Cart</Link>
        <Link to="/about">About</Link>
      </div>

      <div className="navButtons">
        <Link to="/login">
          <button>Login</button>
        </Link>

        <Link to="/reg">
          <button>Sign Up</button>
        </Link>
      </div>
    </nav>
  )
}
export default NavBar;