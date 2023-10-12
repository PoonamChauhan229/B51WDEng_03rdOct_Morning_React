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

// const navItems = ['Home', 'AddMovie', 'AddColor','Cart'];

function NavbarMUI({cart}) {
const navigate=useNavigate()
 return (
    <Box sx={{ display: 'flex',padding:0,marginBottom:10}}>
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

            <Button  sx={{ color: '#fff'}} onClick={()=>navigate('/')}>Home</Button>
            <Button  sx={{ color: '#fff' }} onClick={()=>navigate('/addmovie')}>AddMovie</Button>
            <Button  sx={{ color: '#fff' }} onClick={()=>navigate('/addcolor')}>AddColor</Button>
            <Button  sx={{ color: '#fff' }}>Cart{cart}</Button>
          
          </Box>
        </Toolbar>
      </AppBar>   
      
    </Box>
  );
}
export default NavbarMUI;
