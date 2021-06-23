// Basket
function Cart(props){
 const {quantity = 0, handleBasketShow = Function.prototype} = props;

 return(
     <div onClick = {handleBasketShow}  className = "cart light-blue darken-4 white-text">
         <i className = "material-icons">shopping_cart</i>
         {quantity ? <span className ="cart-quantity" >{quantity}</span> : null }
     </div>
 )
}

export {Cart}