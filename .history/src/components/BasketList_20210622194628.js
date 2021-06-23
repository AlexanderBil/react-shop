function BasketList(props){
  const {order} = props;

  return(
    <ul class="collection">
    <a href="#!" class="collection-item active">Basket</a>
    <a href="#!" class="collection-item ">Alvin</a>
    <a href="#!" class="collection-item">Alvin</a>
    <a href="#!" class="collection-item">Alvin</a>
    <a href="#!" class="collection-item active">Total cost:</a>
  </ul>
  )
}

export {BasketList}