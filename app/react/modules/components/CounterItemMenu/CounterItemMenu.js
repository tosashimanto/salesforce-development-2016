import React from 'react'

export default React.createClass({

  render: function(){
    return (
      <div className="counter-item-menu-component">
        <div className="slds-dropdown-trigger" aria-expanded="true">
          <button className="slds-button slds-button--icon-border-filled" aria-haspopup="true">
            <svg aria-hidden="true" className="slds-button__icon slds-button__icon--hint">
              <use xlinkHref="/resource/SLDS202/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
            </svg>
            <span className="slds-assistive-text">Show More</span>
          </button>
          <div className="slds-dropdown slds-dropdown--right slds-dropdown--actions slds-dropdown--menu">
            <ul className="dropdown__list" role="menu">
              <li className="slds-dropdown__item">
                <a onClick={this.props._countup} role="menuitem">
                  <p className="slds-truncate">Up</p>
                </a>
              </li>
              <li className="slds-dropdown__item">
                <a onClick={this.props._countdown} role="menuitem">
                  <p className="slds-truncate">Down</p>
                </a>
              </li>
              <li className="slds-dropdown__item">
                <a onClick={this.props._autoCountup} role="menuitem">
                  <p className="slds-truncate">Auto</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
})