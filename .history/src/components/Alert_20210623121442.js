function Alert(props){
  const {name} = props;

  return (
      <div id = "toast-container">
        <div className="toast">{name}</div>
      </div>
  )
}

export {Alert}