
function BasketList(props){
  const {order} = props;

  return(
    <ul class="collection">
    <li  class="collection-item active">Basket</li>
    <li  class="collection-item active">Total cost:</li>
  </ul>
  )
}

export {BasketList}