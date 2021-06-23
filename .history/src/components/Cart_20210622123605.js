// Basket
function Cart(props){
 const {quantity = 0} = props;

 return(
     <div>
         <i className = "material-icons">shopping_cart</i>
         {quantity ? <span xc>{quantity}</span> : null }
     </div>
 )
}

export {Cart}