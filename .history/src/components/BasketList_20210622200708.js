import {BasketItem} from './BasketItem';

function BasketList(props){
  const {order = []} = props;

  return(
    <ul class="collection">
    <li  class="collection-item active">Basket</li>
    {
        order.length ? order.map(item => (
            <BasketItem key = {item.id} {...item}/>
        )) :     <li  class="collection-item ">
      terial-icons">close</i></span>
        </li>
    }
    <li  class="collection-item active">Total cost:</li>
  </ul>
  )
}

export {BasketList}