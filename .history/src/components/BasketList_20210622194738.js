function BasketList(props){
  const {order} = props;

  return(
    <ul class="collection">
    <li href="#!" class="collection-item active">Basket</li>
    <li href="#!" class="collection-item ">Alvin</li>
    <li href="#!" class="collection-item">Alvin</li>
    <li  class="collection-item">Alvin</li>
    <li  class="collection-item active">Total cost:</li>
  </ul>
  )
}

export {BasketList}