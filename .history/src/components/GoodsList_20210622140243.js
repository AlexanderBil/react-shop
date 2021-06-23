import {GoodsItem} from './GoodsItem'

function GoodsList(props){
  const {goods = [], addToBasket} = props;

 if(!goods.length){
   return <h3>Nothing here</h3>
 }

 return(
   <div className = "goods">
     {goods.map(item => (
       <GoodsItem key = {item.id} {...item} addToBasket = {/>
     ))}
   </div>
 )
}

export {GoodsList}