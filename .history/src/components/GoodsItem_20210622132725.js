function GoodsItem(props){
  const {id, name, description, price, full_background, funk} = props;

     return(
        <div className="card" id = {id}>
        <div className="card-image">
          <img src={full_background} alt={name}/>

        </div>
        <div className="card-content">
        <span className="card-title">{name}</span>
          <p>
              {description}
          </p>
        </div>
        <div className="card-action">
          <button onClick = {fu} className = "btn">Buy</button>
          <span className = "right" style ={{fontSize: '1.4rem'}}>{price} UAH</span>
        </div>
      </div>
     )
}

export {GoodsItem}