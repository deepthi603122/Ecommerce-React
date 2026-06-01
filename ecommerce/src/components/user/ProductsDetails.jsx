
import axios from 'axios'

import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom'
import {addItem} from '../../store/cartSlice'




function ProductsDetails() {
  const [product, setproduct]=useState({});

  let params=useParams();
  let navigate=useNavigate();
  let dispatch=useDispatch();

  console.log("params =", params);
  console.log("id =", params.id);

  async function getData(){
    console.log("Fetching product:", params.id);
    let res=await axios.get(`https://fakestoreapi.com/products/${params.id}`);
    console.log(res.data);
    setproduct(res.data);
  }
  useEffect(()=>{
    getData();
  },[])
  return (
  <div>
    <button onClick={()=> navigate("/userDashboard")}>go back</button> <br />
    <img src={product.image} alt="" />
    <h2>{product.title}</h2>
     <h2>{product.category}</h2>
      <h2>Rs.{product.price}</h2>
      <p>{product.description}</p>
      

         <button
  onClick={() => {
    dispatch(addItem(product));
    alert("Item added to cart");
  }}
>
  Add To cart
</button>
  </div>

  )
}


export default ProductsDetails