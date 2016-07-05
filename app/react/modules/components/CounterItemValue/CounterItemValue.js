import React from 'react'

export default React.createClass({

  render: function(){
    return (
      <div className="counter-item-value-component">
        <span className="slds-text-heading--large">$ {this.props.countNum}</span>
      </div>
    );
  }
})