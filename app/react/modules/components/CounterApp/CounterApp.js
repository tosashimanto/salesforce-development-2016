import React from 'react'
import Header from '../Header/Header'
import PageHeader from '../PageHeader/PageHeader'
import SideMenu from '../SideMenu/SideMenu'
import CounterBox from '../CounterBox/CounterBox'

export default React.createClass({
  render() {
    return (
      <div className="counter-app-component">
        <Header />
        <div className="slds-grid">
          <nav role="nav" className="slds-col slds-size--2-of-12 siteNavi">
            <SideMenu />
          </nav>
          <main className="slds-col slds-size--10-of-12 siteMain">
            <PageHeader title="Conter Pages" />
            <div className="slds-m-around--small">
              <CounterBox />
            </div>
          </main>
        </div>
      </div>
    )
  }
})