import {useState, useEffect} from 'react';
import {API_KEY, API_URL} from '../config';

import {Preloader} from './Preloader';
import {GoodsList} from './GoodsList';
import{Cart} from './Cart';

function Shop(){
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);

    useEffect(function getGoods(){
      fetch(API_URL, {
          headers: {
              'Authorization': API_KEY,
          },
      }).then(data => data.json()).then(data => {
        data.featured && setGoods(data.featured);
        setLoading(false)
      })
    }, []);

    let addToBasket = function(item){
      const itemIndex = order.findIndex(orderItem => orderItem.id === 
      const newItem = {
       ...item,
       quantity: 1,
      }
      setOrder([...order, newItem])
    }

    return(
        <main className = "container content">
          <Cart quantity = {order.length}/>
           {loading ? <Preloader/> : <GoodsList goods = {goods}/>}
        </main>
    )
}

export {Shop}