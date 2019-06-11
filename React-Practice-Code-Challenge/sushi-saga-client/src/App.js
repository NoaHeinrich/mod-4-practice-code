import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],
    index: 0,
    eaten: [],
    money: 100
  }

  componentDidMount(){
    fetch(API).then(resp => resp.json())
    .then(sushis => this.setState({
      sushis: sushis
    }))
  }

  gimmeFour = () => {
    return this.state.sushis.slice(this.state.index, this.state.index+4)
  }

  moreSushi = () => {
    this.setState({
      index: this.state.index + 4
    })
  }

  nomSushi = sushi => {
    if (this.state.money >= sushi.price){
      this.setState({
        eaten: [...this.state.eaten, sushi],
        money: this.state.money - sushi.price
      })
    } else {
      alert("ATM is around the corner, moocher")
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer  sushis={this.gimmeFour()}
        moreSushi={this.moreSushi}
        eaten={this.state.eaten}
        nomSushi={this.nomSushi}
        />
        <Table money={this.state.money} eaten={this.state.eaten}/>
      </div>
    );
  }
}

export default App;
