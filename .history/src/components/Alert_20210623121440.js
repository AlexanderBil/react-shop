function Alert(props){
  const {name} = props;

  return (
      <div id = "toast-container">
        <div className="toast">{}</div>
      </div>
  )
}

export {Alert}