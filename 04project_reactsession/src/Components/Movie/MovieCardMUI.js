import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SpecialButton from './SpecialButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



export default function MovieCardMUI({ name, poster, rating, summary ,cart,setCart,id,deleteButton,editButton,AddItem}) {
  // console.log(id)
  //console.log(name.slice(0,1))
  const [show,setShow]=useState(false)
  const [btnText,setBtnText]=useState("Add to Cart")  

  const movieRating={
    color:rating>8?"green":"red"
  }
   // UseNavigate
 const navigate=useNavigate()

  return (
    <Card sx={{ maxWidth: 375 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {name.slice(0,1)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings"
          onClick={()=>navigate(`/movies/${id}`)}
          >
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader={<span style={movieRating}>{rating}</span>}
      />
      <CardMedia
        component="img"
        height="194"
        image={poster}
        alt="Paella dish"
      />

{/* icons */}
        <CardActions disableSpacing>
        {/* Like and Dislike */}
        <SpecialButton/>

        {/* Add edit button */}
        {editButton}

        {/* Add delete Button */}

        {deleteButton}

        {/* Shopping Cart */}
        <IconButton aria-label="add to favorites"
         onClick={()=>{
            btnText=="Add to Cart"?setBtnText("Remove from Cart"):setBtnText("Add to Cart")
            btnText=="Add to Cart"?setCart(cart+1):setCart(cart-1) 
        }}        
        >{
              btnText=="Add to Cart"? <AddShoppingCartIcon color="info" sx={{m:0.5}}/> :
              <RemoveShoppingCartIcon color="error" sx={{m:0.5}}/>            }
                            
        </IconButton>

        {/* redux store button */}

        {AddItem}
        {/* Summary show Icon */}
        

              <IconButton aria-label="add to favorites"
              onClick={()=>{
                setShow(!show)
              }}
              >
                 {show?<ExpandMoreIcon/>:<ExpandLessIcon/>}   
              </IconButton>
            

      </CardActions>
        {/* Summary */}
        { show &&
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {summary}
          </Typography>
        </CardContent>
}
    </Card>
  );
}