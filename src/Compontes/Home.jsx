import React, { useContext } from 'react'
import { CartContext } from '../Context/Context'
import './Style.css'
import { Button, Card, Image } from 'react-bootstrap';

function Home() {
    const {Product,Cart,setCart}=useContext(CartContext)
    console.log(Product);
    console.log(Cart);

    const addcart=(item)=>{
        console.log(item);
       
   
        setCart([...Cart,item])
    }
    console.log(Cart);

    const removecart =(item)=>{
        console.log(item);
        setCart(Cart.filter((crt)=>crt.id!== item.id))
    }
    

  return (
    <div className='home'> 
      <div className="productcontainer">
      {Product.map((pd)=>(
          <Card  className='product-card'>
          {/* <img  src={pd.thumbnail} alt={pd.title} width={300} height={100} style={{marginLeft:'auto',marginRight:'auto'}}/> */}
          <Image src={pd.thumbnail} alt={pd.title} width={'auto'} height={150} className='product-image'  rounded />
          <Card.Body>
            <Card.Title>{pd.title}</Card.Title>
            <Card.Text>
            category:{pd.category}
            
            </Card.Text>
            <Card.Text> description : {pd.description} </Card.Text>
            <Card.Text> discountPercentage : {pd.discountPercentage} </Card.Text>
            <Card.Text> price : ₨ {pd.price}  </Card.Text>
            <Card.Text> rating :{pd.rating} ⭐  </Card.Text>



             {
                Cart.some(p=>p.id===pd.id)?(
                    <Button onClick={()=>removecart(pd)} variant="danger">remove From cart</Button>
                ):(
                    <Button  onClick={()=>addcart(pd)}>add to Cart</Button>
                )
             }
            
            


          </Card.Body>
        </Card>
      ))}
      </div>
     </div>
  )
}

export default Home