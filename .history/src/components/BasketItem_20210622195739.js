function BasketItem (props){
    const {id, name, price, quantity} = props;
 return(
    <li  class="collection-item ">
        {name} x{}
        </li>
 )
}

export {BasketItem}