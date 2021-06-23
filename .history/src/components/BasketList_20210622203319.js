import {BasketItem} from './BasketItem';

function BasketList(props){
  const {order = [], handleBasketShow} = props;

  return(
    <ul class="collection basket-list">
    <li  class="collection-item active">Basket</li>
    {
        order.length ? order.map(item => (
            <BasketItem key = {item.id} {...item}/>
        )) :  <li  class="collection-item ">Сart is empty </li>
    }
    <li  class="collection-item active">Total cost:</li>
    <i clas></i>
  </ul>
  )
}

export {BasketList}