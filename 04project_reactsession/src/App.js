
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import MovieSection from './Components/Movie/MovieSection';


function App() {
  const [cart,setCart]=useState(0)
  return (
    
    <>
    {/* display */}
    <Navbar cart={cart}/>

    {/* add the functionality */}
    <MovieSection cart={cart} setCart={setCart}/>

    </> 
    
  );
}

export default App;
