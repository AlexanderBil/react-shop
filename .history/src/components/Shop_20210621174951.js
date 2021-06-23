import {useState, useEffect} from 'react'
import {API}

function Shop(){
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(function getGoods(){

    }, []);

    return(
        <main className = "container content">

        </main>
    )
}

export {Shop}