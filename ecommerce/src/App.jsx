// import './App.css'
// import React from 'react'
// import {BrowserRouter, Routes, Route} from 'react-router-dom'

// import Landingpage from './components/Landingpage'
// import Home from './components/Home'
// import Reg from './components/Reg'
// import Login from './components/Login'
// import UserDashboard from './components/user/UserDashboard'
// import UserHome from './components/user/UserHome'
// import ProtectedRoute from './components/user/ProtectedRoute'


// function App() {

//   return (
    
//       <BrowserRouter>
//       <Routes>
//         {/* this is seperate route and for landing page----------------------------------------------------------------------------------- */}
//         <Route path="/" element={<Landingpage/>}>                   
//              <Route index element={<Home/>}/>
//              <Route path='reg' element={<Reg />}/>
//             <Route path='login' element={<Login />}/>

//         </Route>
//          <Route path='/userDashboard' element={
        
        

//       {/* this is seperate route------------------------------------------------------------------------------------------------------------*/}
//       {/* we should give route here bcoz we have written in loginpage that to redirect to userDashboard-------------------------------------------------------- */}
//       {/* this userDashboard should have home so i created userHome---------------------------------------------------- */}
      

        
//           <ProtectedRoute>                    //---------------------------------to make it protected 
//               <UserDashboard />
//           </ProtectedRoute>}>

//           {/* this will go as child in PRotectedRoute */}
//              <Route index element={<UserHome />}/>    
           

//              <Route 
//                  path="productDetails" element={<UserHome />}
//              />
//              </Route 
//                   path="productDetails"
//                   element={<ProductDetails />}
//             />
//             </Route>

//       </Routes>
//       </BrowserRouter>
      
  
//   )
// }

// export default App




















import './App.css'
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Landingpage from './components/Landingpage'
import Home from './components/Home'
import Reg from './components/Reg'
import Login from './components/Login'
import UserDashboard from './components/user/UserDashboard'
import UserHome from './components/user/UserHome'
import ProductsDetails from "./components/user/ProductsDetails";

import ProtectedRoute from './components/user/ProtectedRoute'
import Cart from './components/user/Cart'
import Offers from './components/Offers'
import About from './components/About'




function App() {

  return (
    <div>

      <BrowserRouter>
      <Routes>

        {/* this is seperate route and for landing page----------------------------------------------------------------------------------- */}
        <Route path="/" element={<Landingpage/>}>
             <Route index element={<Home/>}/>
             <Route path='reg' element={<Reg />}/>
             <Route path='login' element={<Login />}/>
             <Route path="offers" element={<Offers />} />
             <Route path="about" element={<About />} />
        </Route>

        {/* this is seperate route------------------------------------------------------------------------------------------------------------*/}
        {/* we should give route here bcoz we have written in loginpage that to redirect to userDashboard-------------------------------------------------------- */}
        {/* this userDashboard should have home so i created userHome---------------------------------------------------- */}

        <Route path='/userDashboard' element={
          <ProtectedRoute>
              <UserDashboard />
          </ProtectedRoute>}>

          {/* this will go as child in PRotectedRoute */}

          <Route index element={<UserHome />}/> 

          <Route path="/userDashboard/productDetails/:id" element={<ProductsDetails />} />
          <Route path="/userDashboard/cart" element={<Cart/>}/>
          

        </Route>

      </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
