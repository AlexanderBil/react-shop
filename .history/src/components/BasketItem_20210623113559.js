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
        {name} <i className = "material-icons basket-qua">remove</i> x{quantity} <i className = "material-icons">add</i> = {price*quantity} UAH
        <span onClick = {() =>  removeFromBasket(id)}  class="secondary-content"><i class="material-icons basket-delete">close</i></span>
        </li>
 )
}

export {BasketItem}