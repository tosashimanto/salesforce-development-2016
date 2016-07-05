import React from 'react'

export default React.createClass({

  getInitialState: function(){
    return {
      buttonLabel: "Welcome React Demo Apps"
    }
  },

  _onclick: function(){
    location.href="/home";
    return false;
  },

  render() {
    return (
      <div className="welcome-button-component">
        <button className="slds-button slds-button--brand" onClick={this._onclick}>{this.state.buttonLabel}</button>
      </div>
    )
  }
})