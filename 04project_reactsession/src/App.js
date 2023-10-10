
import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import MovieSection from './Components/Movie/MovieSection';
import ColorSection from './Components/Color/ColorSection';
import { Route, Routes } from 'react-router-dom';
import { movie } from './utils/constants';
import MovieInfo from './Components/Movie/MovieInfo';


function App() {
  const [cart,setCart]=useState(0)
  const [movieList,setMovieList]=useState(movie)
//  console.log(movieList)
  // useEfffect

  useEffect(()=>{
    console.log("initial Render")
    const res1=fetch('https://restcountries.com/v2/all').then(res=>console.log(res))
    // API calls
  },[cart])
  return (    
    <>
    {/* display */}
    <Navbar cart={cart}/>

    {/* add the functionality */}
    

    {/* COlor Section */}

    
    <Routes>
        <Route path="/"  element={<MovieSection cart={cart} setCart={setCart} movieList={movieList}
        setMovieList={setMovieList}
        
        />}/>
        <Route path='/addcolor' element={<ColorSection/>}/>

        <Route path='/movies/:id' element={<MovieInfo movieList={movieList}/>}/>
    </Routes> 
    </> 
    
  );
}

export default App;
