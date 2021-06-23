function BasketItem (props){
    const {
        id,
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
        <i onClick = {() => decQuantity(id)} className = "material-icons basket-quantity">remove</i>{' '}
        <i onClick = {() => incQuantity(id)} className = "material-icons basket-quantity">add</i>
        <span onClick = {() =>  removeFromBasket(id)}  className="secondary-content"><i class="material-icons basket-delete">close</i></span>
        </li>
 )
}

export {BasketItem}