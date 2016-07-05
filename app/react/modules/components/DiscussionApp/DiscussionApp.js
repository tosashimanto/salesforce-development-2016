import React from 'react'
import Header from '../Header/Header'
import PageHeader from '../PageHeader/PageHeader'
import SideMenu from '../SideMenu/SideMenu'
import CommentBox from '../CommentBox/CommentBox'

export default React.createClass({
  render() {
    return (
      <div className="descusion-app-component">
        <Header />
        <div className="slds-grid">
          <nav role="nav" className="slds-col slds-size--2-of-12 siteNavi">
            <SideMenu />
          </nav>
          <main className="slds-col slds-size--10-of-12 siteMain">
            <PageHeader title="Desicussion Pages" />
            <div className="slds-m-around--small">
              <CommentBox url="/api/comments" pollInterval={100000} />
            </div>
          </main>
        </div>
      </div>
    )
  }
})