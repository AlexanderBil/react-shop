import {BasketItem} from './BasketItem';

function BasketList(props){
  const {order = [], handleBasketShow} = props;
  const totalPrice = order.reduce((acc, el) => {
     return acc + el.price * el.quantity
  }, 0)

  return(
    <ul class="collection basket-list">
    <li  class="collection-item active">Basket</li>
    {
        order.length ? order.map(item => (
            <BasketItem key = {item.id} {...item}/>
        )) :  <li  class="collection-item ">Сart is empty </li>
    }
    <li  class="collection-item active">Total cost: {to}</li>
    <i className = "material-icons basket-close" onClick = {handleBasketShow}>close</i>
  </ul>
  )
}

export {BasketList}