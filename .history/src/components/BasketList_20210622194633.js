function BasketList(props){
  const {order} = props;

  return(
    <ul class="collection">
    <li href="#!" class="collection-item active">Basket</li>
    <a href="#!" class="collection-item ">Alvin</a>
    <a href="#!" class="collection-item">Alvin</a>
    <a href="#!" class="collection-item">Alvin</a>
    <a href="#!" class="collection-item active">Total cost:</a>
  </ul>
  )
}

export {BasketList}