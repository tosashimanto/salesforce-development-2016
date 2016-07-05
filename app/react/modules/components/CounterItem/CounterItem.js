import React from 'react'
import CounterItemValue from '../CounterItemValue/CounterItemValue'
import CounterItemMenu from '../CounterItemMenu/CounterItemMenu'

export default React.createClass({

  getInitialState: function(){
    return {
      countNum: 0,
      maxCountNum: 1000,
      autoCountUpId: null
    }
  },

  _countup: function(){
    if (this.state.countNum < this.state.maxCountNum) {
      this.setState({countNum: this.state.countNum + 1});
    }
  },
  
  _countdown: function(){
    this.setState({countNum: this.state.countNum - 1});
  },

  _autoCountup: function(){
    var intervalId = setInterval(this._autoCountupAction, 1);
    this.setState({autoCountUpId: intervalId});
  },

  _autoCountupAction: function(){
    if (this.state.countNum < this.state.maxCountNum) {
      this.setState({countNum: this.state.countNum + 1});
    } else {
      clearInterval(this.state.autoCountUpId);
    }
  },

  render: function(){
    return (
      <tr className="counter-item-component">
        <td>
          <CounterItemValue countNum={this.state.countNum} />
        </td>
        <td>
          <CounterItemMenu _countup={this._countup} _countdown={this._countdown} _autoCountup={this._autoCountup} />
        </td>
      </tr>
    );
  }
})