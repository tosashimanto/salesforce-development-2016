import React from 'react'
import Header from '../Header/Header'
import PageHeader from '../PageHeader/PageHeader'
import WelcomeButton from '../WelcomeButton/WelcomeButton'

export default React.createClass({
  render() {
    return (
      <div className="index-app-component">
        <Header />
        <main>
          <PageHeader title="Index Pages" />
          <div className="slds-p-around--large">
            <div className="slds-m-top--large slds-text-align--center">
              <WelcomeButton />
            </div>
          </div>
        </main>
      </div>
    )
  }
})