import {useState, useEffect} from 'react'
import {API_KEY, API} from '../config'

function Shop(){
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(function getGoods(){
      fetch()
    }, []);

    return(
        <main className = "container content">

        </main>
    )
}

export {Shop}