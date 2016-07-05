import React from 'react'
import Header from '../Header/Header'
import PageHeader from '../PageHeader/PageHeader'
import SideMenu from '../SideMenu/SideMenu'

export default React.createClass({
  render() {
    return (
      <div className="home-app-component">
        <Header />
        <div className="slds-grid">
          <nav role="nav" className="slds-col slds-size--2-of-12 siteNavi">
            <SideMenu />
          </nav>
          <main className="slds-col slds-size--10-of-12 siteMain">
            <PageHeader title="Home Pages" />
            <div className="slds-m-around--small">
              <iframe src="https://facebook.github.io/react/index.html" width="100%" height="550px" />
            </div>
          </main>
        </div>
      </div>
    )
  }
})