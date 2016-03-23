import React from 'react'
import RRTT from './RRTT'

export default class Container extends React.Component {

  constructor() {
    super();
    this.state = {
      flare: undefined,
      circleSize: 4.5
    }

    this.increaseCircle = this.increaseCircle.bind(this);
    this.decreaseCircle = this.decreaseCircle.bind(this);
  }

  componentDidMount() {
    if (!this.state.flare) {
      d3.json("flare.json", (error, root) => {
        this.setState({flare: root});
      });
    }

  }

  increaseCircle() {
    this.setState({ circleSize: this.state.circleSize + 1 })
  }

  decreaseCircle() {
    this.setState({ circleSize: this.state.circleSize - 1 })
  }

  render() {
    return (
      <div>
        <ul>
          <li><a href="#" onClick={this.increaseCircle}>Increase Circle</a></li>
          <li><a href="#" onClick={this.decreaseCircle}>Decrease Circle</a></li>
        </ul>
        <div>
          <RRTT flare={ this.state.flare } circleSize={ this.state.circleSize } />
        </div>
      </div>
    )
  }
}

// <RRTT
//   className='visitors'
//   width={document.body.offsetWidth}
//   height={800}
//   data={data}
// />
