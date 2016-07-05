import React from 'react'
require('./Header.scss');

export default React.createClass({
  render() {
    return (
      <div className="header-component">
        <header className="siteHeader"></header>
      </div>
    )
  }
})