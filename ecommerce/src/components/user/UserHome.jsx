import React, {useEffect,useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addItem } from '../../store/cartSlice'
function userHome() {

  const [products, setproducts]=useState([])

  let navigate=useNavigate()
  let dispatch=useDispatch()

  async function getData(){
    let res=await axios.get("https://fakestoreapi.com/products")
    console.log(res.data)
    setproducts(res.data)
  }

  let result=products.map((item,ind)=>{ 
    return(
      <div className="card" key={item.id}>
        <img src={item.image} alt="iamge-not-found"  className='image'/>
        <h1>{item.title}</h1>
        <h1>{item.category}</h1>
        <h1>{item.price}</h1>
        <button onClick={()=>{dispatch(addItem(item));
          alert("Item added to the cart");
        }}>Add to cart</button>
        <button onClick={() => navigate(`/userDashboard/productDetails/${item.id}`)}>open</button>
  
      </div>

    )
  })

  useEffect(()=>{
    getData()

  },[])
  return (
    <div>
      <h1>Products</h1>
      <div className="products">
        {result}
      </div>
      
    </div>
  )
}

export default userHome