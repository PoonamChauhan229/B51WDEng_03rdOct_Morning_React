
import { useEffect, useState } from 'react';
import './App.css';
import MovieSection from './Components/Movie/MovieSection';
import ColorSection from './Components/Color/ColorSection';
import { Route, Routes } from 'react-router-dom';
import { movie } from './utils/constants';
import MovieInfo from './Components/Movie/MovieInfo';
import AddMovie from './Components/Movie/AddMovie';
import EditForm from './Components/Movie/EditForm';
import NavbarMUI from './Components/NavbarMUI';
import TicTacToe from './Components/TicTacToeGame/TicTacToe';
import Theme from './Components/PropDrilling/Theme';
import ThemeUseContext from './Components/UseContext/ThemeUseContext';
import { ThemeProvider, createTheme } from '@mui/material/styles';




function App() {
  const [cart,setCart]=useState(0)
//  console.log(movieList)
  // useEfffect => cbk function and a dependancy array
const [mode ,setMode]=useState("light")
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
 
  return (    
    <>
     <ThemeProvider theme={darkTheme}>
    {/* display */}
    {/* <Navbar cart={cart}/> */}
    <NavbarMUI cart={cart} mode={mode} setMode={setMode}/>
  

    {/* add the functionality */}
    

    {/* COlor Section */}

    
    <Routes>
        <Route path="/"  element={<MovieSection cart={cart} setCart={setCart}  
        />}/>
        <Route path='/addcolor' element={<ColorSection/>}/>

        <Route path='/movies/:id' element={<MovieInfo />}/>
        <Route path='/addmovie' element={<AddMovie/>}/>
        <Route path='/edit/:id' element={<EditForm/>}/>
        <Route path='/tictactoe' element={<TicTacToe/>}/>
        <Route path='/propdrilling' element={<Theme/>}/>
        <Route path='/useContext' element={<ThemeUseContext/>}/>
    </Routes>
    </ThemeProvider>

    </> 
    
  );
}

export default App;

