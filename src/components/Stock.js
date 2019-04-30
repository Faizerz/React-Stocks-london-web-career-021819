import React from 'react'

const Stock = (props) => (<div>

  <div className="card"
        onClick={props.addToPortfolio
          ? () => props.addToPortfolio(props.stock.id)
          : () => props.sellStock(props.stock.id)}>
    <div className="card-body">
      <h5 className="card-title">{props.stock.name}</h5>
      <p className="card-text">{props.stock.ticker} - £{props.stock.price}</p>
    </div>
  </div>

</div>);

export default Stock
