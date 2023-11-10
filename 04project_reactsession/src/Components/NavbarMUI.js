import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// const navItems = ['Home', 'AddMovie', 'AddColor','Cart'];

function NavbarMUI({cart,mode,setMode}) {
const navigate=useNavigate()
//subscribe to the store
//useSelector
const cartItems=useSelector(store=>store.cart.items)
//console.log(cartItems)
 return (
    <Box sx={{ display: 'flex',padding:0,marginBottom:10,}}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MoviesFlix
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' }}}>
            {/* {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))} */}

            <Button  sx={{ color: '#fff',fontSize:"11px"}} onClick={()=>navigate('/')}>Home</Button>
            <Button  sx={{ color: '#fff',fontSize:"11px" }} onClick={()=>navigate('/addmovie')}>AddMovie</Button>
            <Button  sx={{ color: '#fff',fontSize:"11px" }} onClick={()=>navigate('/addcolor')}>AddColor</Button>
            <Button  sx={{ color: '#fff',fontSize:"11px" }}>Cart<span style={{color:"orange",fontSize:"20px"}}><i>{cart}</i></span></Button>
            <Button  sx={{ color: '#fff',fontSize:"11px" }} onClick={()=>navigate('/tictactoe')}>TicTacToe Game</Button>
            <Button  sx={{ color: '#fff',fontSize:"11px" }} onClick={()=>navigate('/propdrilling')}>PropDrilling-Theme</Button>
            <Button  sx={{ color: '#fff',fontSize:"11px" }} onClick={()=>navigate('/useContext')}>UseContext-Theme</Button>
            <Button  sx={{ color: '#fff',fontSize:"11px" }} onClick={()=>navigate('/class')}>Class-Component</Button>
            <Button  sx={{ color: '#fff',fontSize:"11px" }} onClick={()=>navigate('/cart')}>Redux-Cart {cartItems.length}</Button>
            <Button  sx={{ color: '#fff',fontSize:"11px" }} onClick={()=>navigate('/formik')}>Formik</Button>
            <Button  sx={{ color: '#fff',fontSize:"11px" }} onClick={()=>navigate('/addmovieformik')}>AddMovie-Formik</Button>






            <Button  sx={{ color: '#fff' }} onClick={()=>{setMode(mode=="light"?"dark":"light")}}>{mode}Mode</Button>

            
          </Box>
        </Toolbar>
      </AppBar>   
      
    </Box>
  );
}
export default NavbarMUI;
