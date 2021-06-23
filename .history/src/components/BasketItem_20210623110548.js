function BasketItem (props){
    const {id, name, price, quantity, removeFromBasket} = props;
 return(
    <li  class="collection-item ">
        {name} x{quantity} = {price}
        <span onClick = {() =>  removeFromBasket(id)}  class="secondary-content"><i class="material-icons basket-delete">close</i></span>
        </li>
 )
}

export {BasketItem}