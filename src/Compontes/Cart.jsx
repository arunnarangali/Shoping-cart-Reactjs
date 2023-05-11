import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../Context/Context';
import { Button, Col, Image, ListGroup, Row } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';

function Cart() {
    const {Cart,setCart}=useContext(CartContext)
    console.log(Cart);
    const [total, settotal] = useState('')
    useEffect(() => {
      settotal(Cart.reduce((acc,Curr)=>acc + Number(Curr.price),0))
    }, [Cart])
    const removecart=(item)=>{
      console.log(item);
      setCart(Cart.filter((crt)=>crt.id!== item.id))
  }

  return (
    <div className='home'> 
        <div className='productcontainer'>
          <ListGroup>
            {
              Cart.map(prod=>(
                <ListGroup.Item key={prod.id}>
                   <Row>
                   <Col md={2}>
                      <Image src={prod.thumbnail} alt={prod.title} fluid rounded />
                    </Col>
                    <Col md={2}>
                      <span>{prod.title}</span>
                    </Col>
                    <Col md={2}> ₨ {prod.price}</Col>
                    <Col md={2}>
                      {prod.rating}
                    </Col>
                    <Col md={2}>
                      <Button type='button' variant='light' onClick={()=>removecart(prod)}>

                    <AiFillDelete style={{fontSize:"20px",cursor:'pointer'}}  />
                      </Button>
                    </Col>
                   </Row>
                </ListGroup.Item>
               
              ))
            }
          </ListGroup>

        </div>
        <div className='filters summary'>
          <span className='title'>SubTotal({Cart.length})</span>
          <span style={{fontWeight:700 ,fontSize:20}}>Total :₨ {total}</span>
          <Button type='button' disabled={Cart.length === 0}>
            Buy all the Item
          </Button>
          
        </div>
       </div>
  )
}

export default Cart