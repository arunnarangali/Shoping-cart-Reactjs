import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const CartContext =createContext();

const Context = ({ children}) => {
    const [Product, setProduct] = useState([])
    const [Cart, setCart] = useState([])
    useEffect(() => {
        axios.get('https://dummyjson.com/products').then((res)=>{
            console.log(res.data);
            setProduct(res.data.products)
        }).catch(err=>console.log(err))
    }, [])
    console.log(Product);
    
   
  return (
    <CartContext.Provider value={{Product,Cart,setCart}}>
        {children}
    </CartContext.Provider>
  )
}

export default Context
 