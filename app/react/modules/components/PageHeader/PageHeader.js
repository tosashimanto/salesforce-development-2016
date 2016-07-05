import React from 'react'
require('./PageHeader.scss');

export default React.createClass({

  _toIndex: function(){
    location.href="/";
    return false;
  },
  _toHome: function(){
    location.href="/apex/ReactHome";
    return false;
  },
  render() {
    return (
      <div className="page-header-component">
        <div className="slds-page-header pageHeader">
          <div className="slds-grid">
            <div className="slds-col slds-has-flexi-truncate">
              <p className="slds-text-heading--label">React × Visualforce</p>
              <div className="slds-grid">
                <div className="slds-grid slds-type-focus slds-no-space">
                  <h1 className="slds-page-header__title slds-truncate" title="Lightning Design System Apps">Lightning Design System Apps - {this.props.title}</h1>
                </div>
              </div>
            </div>
            <div className="slds-col slds-no-flex slds-align-bottom">
              <div className="slds-grid">
                <div className="slds-button-group" id="homeIcon" role="group">
                  <button className="slds-button slds-button--icon-border slds-not-selected" onClick={this._toHome}>
                    <svg aria-hidden="true" className="slds-button__icon">
                      <use xlinkHref="/resource/SLDS202/assets/icons/utility-sprite/svg/symbols.svg#home"></use>
                    </svg>
                    <span className="slds-assistive-text">Home</span>
                  </button>
                </div>
                <div className="slds-button-group" id="logoutIcon" role="group">
                  <button className="slds-button slds-button--icon-border slds-not-selected" onClick={this._toIndex}>
                    <svg aria-hidden="true" className="slds-button__icon">
                      <use xlinkHref="/resource/SLDS202/assets/icons/utility-sprite/svg/symbols.svg#logout"></use>
                    </svg>
                    <span className="slds-assistive-text">Logout</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <p className="slds-text-body--small slds-page-header__info"></p>
        </div>
      </div>
    )
  }
})