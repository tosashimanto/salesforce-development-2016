import React from 'react'
require('./SideMenu.scss');

export default React.createClass({
  render() {
    return (
      <div className="side-menu-component">
        <div className="sideMenu">
          <ul className="slds-list--vertical slds-has-dividers">
            <li className="slds-list__item nav-list"><a href="/apex/ReactHome">Home</a></li>
            <li className="slds-list__item nav-list"><a href="/apex/ReactTodo">Todo</a></li>
            <li className="slds-list__item nav-list"><a href="/apex/ReactDiscussion">Discussion</a></li>
            <li className="slds-list__item nav-list"><a href="/apex/ReactCounter">Counter</a></li>
            <li className="slds-list__item nav-list"><a href="/apex/ReactBoard">Opportunity Board</a></li>
            <li className="slds-list__item nav-list"><a href="/">Return</a></li>
          </ul>
        </div>
      </div>
    )
  }
})