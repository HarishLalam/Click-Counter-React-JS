import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(lastCount => ({count: lastCount.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="counter-page-container">
        <h1 className="counter-heading">
          The Button has been clicked{' '}
          <span className="counter-value">{count}</span>
          times
        </h1>
        <p className="counter-description">
          Click the button to increase the count!
        </p>
        <button
          className="counter-button"
          type="button"
          onClick={this.onIncrement}
        >
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
