// Write your code here

import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onClickButton = () => {
    const randomNum = this.getRandomNumber()
    this.setState({count: randomNum})
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <div className="num-gen-container">
          <h1 className="main-head">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="button" type="button" onClick={this.onClickButton}>
            Generate
          </button>
          <p className="count-num">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
