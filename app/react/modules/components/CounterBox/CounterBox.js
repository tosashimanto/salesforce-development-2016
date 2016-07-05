import React from 'react'
import CounterItem from '../CounterItem/CounterItem'

export default React.createClass({
  render: function(){
    return (
      <div className="counter-box-component">
        <table className="slds-table slds-table--bordered" cellpadding="0" cellspacing="0" border="0">
          <colgroup>
            <col></col>
            <col width="50"></col>
          </colgroup>
          <tbody>
            <CounterItem />
            <CounterItem />
            <CounterItem />
            <CounterItem />
            <CounterItem />
            <CounterItem />
            <CounterItem />
            <CounterItem />
            <CounterItem />
            <CounterItem />
          </tbody>
        </table>
      </div>
    );
  }
})