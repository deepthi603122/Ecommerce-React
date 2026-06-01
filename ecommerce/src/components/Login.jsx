// import React from 'react'
// import {useState} from "react"
// import { Link, useNavigate } from 'react-router-dom'

// //for every text box we need to use the state to print value in console from the forms given below(step2)

// function Login() {

//         const [email, setemail] = useState("");
//     const [password, setpassword] = useState("");

//       const navigate = useNavigate()

//     function handleSubmit(event) {
//         event.preventDefault();
//         //validations

//              if (email == "" || password == "") {
//                alert("please fill the details")
//                return
//         }
//     //regex

//      let obj = {email, password
//         }
//         console.log(obj);


//         //-------from backend we will get token
//         //-------store token in local storage
//         let token="gfcghh45576)((*&&^%%%%%jjhgggghhjjk"
//         localStorage.setItem("token",token);

        
//         alert("the login is success!")
//         //redirect Login 
        
      
//         navigate("/userDashboard")

//         setemail("");
//         setpassword("");
//     }

//     return (

//         <div> Login
        
//           <form className="form" onSubmit={handleSubmit}>
//                <input type="email" placeholder="Enter ur mail" onChange={(event)=> setemail(event.target.value)} value={email}/>
//             <input type="password" placeholder="Enter password" onChange={(event)=> setpassword(event.target.value)} value={password}/>
//                 <button className="btn">Login</button>

//                 <p> if u dont have the account
//                                    <Link to="/reg">Register</Link>
//                 </p>
//                 </form>
//         </div>
//     )
// }

// export default Login









import React from 'react'
import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom'

//for every text box we need to use the state to print value in console from the forms given below(step2)

function Login() {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const navigate = useNavigate()

    function handleSubmit(event) {

        event.preventDefault();

        //validations

        if (email == "" || password == "") {

            alert("please fill the details")
            return
        }

        //regex

        let obj = {

            email,
            password

        }

        console.log(obj);

        //-------from backend we will get token

        //-------store token in local storage

        let token = "gfcghh45576)((*&&^%%%%%jjhgggghhjjk"

        localStorage.setItem("token", token);

        alert("the login is success!")

        //redirect Login

        navigate("/userDashboard")

        setemail("");
        setpassword("");
    }

  return (

    <div className="loginContainer">

        <div className="loginCard">

            <div className="userIcon">
                👤
            </div>

            <h2>Log in to Dashboard</h2>

            <form className="loginForm" onSubmit={handleSubmit}>

                <input
                    type="email"
                    placeholder="Email"
                    onChange={(event) => setemail(event.target.value)}
                    value={email}
                />

                <input
                    type="password"
                    placeholder="Password"
                    onChange={(event) => setpassword(event.target.value)}
                    value={password}
                />

                <a href="#">Forgot Password?</a>

                <button className="loginBtn">
                    Login
                </button>

                <p>
                    Don't have an account?
                    <Link to="/reg"> Register</Link>
                </p>

            </form>

        </div>

    </div>

)


}

export default Login