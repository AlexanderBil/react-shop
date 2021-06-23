import {GoodsItem} from './GoodsItem'

function GoodsList(props){
  const {goods = []} = props;

 if(!goods.length){
   <h3>Nothing here</h3>
 }
}

export {GoodsList}