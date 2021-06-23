// Basket icon
function Cart(props){
 const {quantity = 0, handleBasketShow} = props;

 return(
     <div onClick = {handleBasketShow}  className = "cart light-blue darken-4 white-text">
         <i className = "material-icons">shopping_cart</i>
         {quantity ? <span className ="cart-quantity" >{quantity}</span> : null }
     </div>
 )
}

export {Cart}