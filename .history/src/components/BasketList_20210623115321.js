import {BasketItem} from './BasketItem';

function BasketList(props){
  const {order = [],
     handleBasketShow,
      removeFromBasket,
      incQuantity,
      decQuantity,
    } = props;
  const totalPrice = order.reduce((acc, el) => {
     return acc + el.price * el.quantity
  }, 0)

  return(
    <ul class="collection basket-list">
    <li  class="collection-item active">Basket</li>
    {
        order.length ? order.map(item => (
            <BasketItem 
            key = {item.id} 
            {...item} 
            removeFromBasket = {removeFromBasket}
            incQuantity = {incQuantity}
            decQuantity = {decQuantity}
             />
        )) :  <li  class="collection-item ">Сart is empty </li>
    }
    <li  class="collection-item active">Total cost: {totalPrice} UAH</li>
    <i className = "material-icons basket-close" onClick = {handleBasketShow}>close</i>
  </ul>
  )
}

export {BasketList}
dfhgdfrhn