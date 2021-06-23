import {BasketItem} from './BasketItem';

function BasketList(props){
  const {order = [], handleBasket} = props;

  return(
    <ul class="collection basket-list">
    <li  class="collection-item active">Basket</li>
    {
        order.length ? order.map(item => (
            <BasketItem key = {item.id} {...item}/>
        )) :  <li  class="collection-item ">Сart is empty </li>
    }
    <li  class="collection-item active">Total cost:</li>
  </ul>
  )
}

export {BasketList}