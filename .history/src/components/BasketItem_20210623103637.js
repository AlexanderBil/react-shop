function BasketItem (props){
    const {id, name, price, quantity, removeFromBasket} = props;
 return(
    <li  class="collection-item ">
        {name} x{quantity} = {price}
        <span onClick = {() => }  class="secondary-content"><i class="material-icons basket-delete">close</i></span>
        </li>
 )
}

export {BasketItem}