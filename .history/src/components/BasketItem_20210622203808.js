function BasketItem (props){
    const {id, name, price, quantity} = props;
 return(
    <li  class="collection-item ">
        {name} x{quantity} = {price}
        <span  class="secondary-content"><i class="material-icons basket-">close</i></span>
        </li>
 )
}

export {BasketItem}