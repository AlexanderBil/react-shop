import {useState, useEffect} from 'react';
import {API_KEY, API_URL} from '../config';
import {Preloader} from '../components/Preloader';

function Shop(){
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);

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

    return(
        <main className = "container content">
           {
               lod
           }
        </main>
    )
}

export {Shop}