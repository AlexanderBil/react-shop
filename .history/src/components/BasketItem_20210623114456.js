function BasketItem (props){
    const {id,
        name,
        price,
        quantity,
        removeFromBasket,
        incQuantity,
        decQuantity,
        } = props;
 return(
    <li  class="collection-item ">
        {name}  x{quantity}  = {price*quantity} UAH{' '} 
        <i onClick = {() => decQuantity(ideFromBasket(id)}  class="secondary-content"><i class="material-icons basket-delete">close</i></span>
        </li>
 )
}

export {BasketItem}