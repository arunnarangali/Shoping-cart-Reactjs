import React, { useContext, useEffect } from 'react'
import { Badge, Button, Container, Dropdown, FormControl, Nav,  Navbar } from 'react-bootstrap'
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

import { Link } from 'react-router-dom';
import { CartContext } from '../Context/Context';

function HeadeNavBar() {
    const {Cart,setCart}=useContext(CartContext)
   
  
   
    let cartlength=Cart.length
    console.log(cartlength);
     useEffect(() => {
      //  if(SearchText !== false){
      //   console.log("ok");
      //   setCart(Cart.filter((crt)=>crt.title===SearchText))
      //  }
     }, [])
   
     
    const removecart=(item)=>{
        console.log(item);
        setCart(Cart.filter((crt)=>crt.id!== item.id))
    }

   

  return (
    <div>
        <Navbar bg="dark" expand="lg" variant='dark'>
      <Container>
        <Navbar.Brand >
           <Link to='/' style={{color:'white',textDecoration:'none'}}> Shoping Cart</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className='ms-auto'>
       {/* <Navbar.Text className='Search me-auto'   >
         <FormControl type='text' style={{width:'auto'}}
         placeholder='Serach a product'   />
       </Navbar.Text> */}
    
          <Dropdown align="end" id="basic-nav-dropdown" >
            
            <Dropdown.Toggle variant='success'>
            
              <FaShoppingCart color="white" fontSize="25px"/>
                <Badge >{cartlength}</Badge>
                
            </Dropdown.Toggle>

            <Dropdown.Menu style={{minWidth:'auto'}}>
                {Cart.length >0 ?(<div>
                  {Cart.map((prod)=>(
                    <span className='cartitem' key={prod.id}>
                        <img src={prod.thumbnail} alt={prod.title} className='cartItemImg'/>
                        <div className='cartItemDetail'>
                            <span>{prod.title}</span>
                            <span> ₨ {prod.price}</span>
                        </div>
                        <AiFillDelete style={{fontSize:"20px",cursor:'pointer'}} onClick={()=>removecart(prod)} />
                    </span>
                  ))}
                    <Link to='/Cart' style={{color:'white',textDecoration:'none'}}> 
                     <Button  style={{width:'95%' ,margin:"0 10px"}}>Go to Cart</Button>
                    </Link>
                    </div>
                ):( <span style={{padding:10}}> Cart is Empty</span>)}
               
            </Dropdown.Menu>

          </Dropdown>
       </Nav>
       </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default HeadeNavBar