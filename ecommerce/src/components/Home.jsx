import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  let navigate = useNavigate();
  return (
    <div className="home">

      <h1>Welcome to KK Store</h1>

      <p>
        Shop Smart, Shop Easy
      </p>

      {/* <img
        src="https://images.unsplash.com/photo-1483985988355-763728e1935b"
        alt="shopping"
        className="homeImage"
      /> */}

       {/* <img

  src=  "https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
  
  alt="shopping"
/>  */}

<img
  src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
  alt="shopping"
  className="homeImage"
/>


{/* <img
  src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b"
  alt="shopping"
  className="homeImage"
/> */}





       <button onClick={() => navigate("/userDashboard")}>
        Explore Now
      </button>

    </div>
  )
}

export default Home





