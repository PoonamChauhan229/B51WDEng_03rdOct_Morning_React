import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MovieCardMUI from './MovieCardMUI'
import { clearCart, clearLastItem} from '../../utils/cartSlice'

const CartPage = () => {
    const cartItems=useSelector(store=>store.cart.items)
    console.log(cartItems)

    const dispatch=useDispatch()
    const ClearCartAll=()=>{
        dispatch(clearCart())
    }

    const removeLastItem=()=>{
        dispatch(clearLastItem())
    }
  return (
    <>

<button style={{marginRight:"20px"}}
        onClick={()=>ClearCartAll()}
        >Clear Cart</button>

        <button
        onClick={()=>removeLastItem()}
        >Remove Last Item</button>
    <div style={{marginTop:"60px",display:"flex",flexWrap:"wrap",gap:"10px"}}>
        
        {
            cartItems.map((element)=>(
                <MovieCardMUI {...element}/>
            ))
        }
        
    </div>
    </>
  )
}

export default CartPage