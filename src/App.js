
import './App.css';
import HeadeNavBar from './Compontes/HeadeNavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Compontes/Home';
import Cart from './Compontes/Cart';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <HeadeNavBar />
     

   
      <div>
          <Routes>
          <Route path='/' element={<Home />} exact/>
          <Route path='/Cart' element={<Cart />} exact/>

          {/* <Route path='/' exact > <Home /> </Route>
        <Route path='/Cart' exact ><Cart />  </Route> */}
          </Routes>
           
        
        
       

      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
