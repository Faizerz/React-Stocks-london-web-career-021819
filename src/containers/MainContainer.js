import React, {Component} from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolio: [],
    filter: ''
  }

  render() {
    const {portfolio, stocks, filter} = this.state
    return (<div>
      <SearchBar filterChange={this.filterChange} sortChange={this.sortChange} />

      <div className="row">
        <div className="col-8">

          <StockContainer stocks={stocks.filter(stock => !portfolio.includes(stock.id)&&stock.type.includes(filter))} addToPortfolio={this.addToPortfolio}/>

        </div>
        <div className="col-4">

          <PortfolioContainer stocks={stocks.filter(stock => portfolio.includes(stock.id)&&stock.type.includes(filter))} sellStock={this.sellStock}/>

        </div>
      </div>
    </div>);
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/stocks').then(res => res.json()).then(jso => this.setState({stocks: jso}))
  }

  addToPortfolio = (id) => {
    let boughtStock = this.state.stocks.find(stock => stock.id === id)
    this.setState({
      portfolio: [
        ...this.state.portfolio,
        boughtStock.id
      ]
    })
  }

  sellStock = (id) => {
    let portfolio = this.state.portfolio.filter(stock => stock !== id)
    this.setState({portfolio: portfolio})
  }

  sortChange = (sort) => {
    if (sort === 'Alphabetically') {
      this.setState({
        stocks: this.state.stocks.sort(
          (stockA, stockB) => stockA.name > stockB.name
          ? 1
          : -1)
      })
    } else if (sort === 'Price') {
      this.setState({
          stocks: this.state.stocks.sort(
            (stockA, stockB) => stockA.price > stockB.price
            ? -1
            : 1)
      })
    }
  }

  filterChange = (e) => {
    this.setState({
      filter: e.target.value
    })
  }
}

export default MainContainer;
