import {useEffect} from 'react';

function Alert(props){
  const {name} = props;

  useEffect(() => {
      
  }, [name])

  return (
      <div id = "toast-container">
        <div className="toast">{name} Added to cart </div>
      </div>
  )
}

export {Alert}