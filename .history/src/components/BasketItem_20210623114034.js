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
        {name}  x{quantity}  = {price*quantity} UAH 
        <i className = "material-icons basket-quantity">remove</i> 
        <i className = "material-icons basket-quantity">add</i>
        <span onClick = {() =>  removeFromBasket(id)}  class="secondary-content"><i class="material-icons basket-delete">close</i></span>
        </li>
 )
}

export {BasketItem}