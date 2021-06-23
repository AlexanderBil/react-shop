import {useEffect} from

function Alert(props){
  const {name} = props;

  return (
      <div id = "toast-container">
        <div className="toast">{name} Added to cart </div>
      </div>
  )
}

export {Alert}