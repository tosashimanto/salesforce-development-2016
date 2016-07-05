import React from 'react'
import BoardItem from '../BoardItem/BoardItem'

export default React.createClass({
  render: function(){
    return (
      <div className="board-box-component">
        <ul>
          <li className="slds-m-bottom--small">
            <BoardItem opportunity={"Buy - Product01 License"} account={"T.Yoshikawa Labs"} amount={3000} date={"2016/05/10"} />
          </li>
          <li className="slds-m-bottom--small">
            <BoardItem opportunity={"Buy - Product02 License"} account={"T.Yoshikawa Labs"} amount={6000} date={"2016/05/11"} />
          </li>
          <li className="slds-m-bottom--small">
            <BoardItem opportunity={"Buy - Product03 License"} account={"T.Yoshikawa Labs"} amount={4500} date={"2016/05/12"} />
          </li>
          <li className="slds-m-bottom--small">
            <BoardItem opportunity={"Buy - Product04 License"} account={"T.Yoshikawa Labs"} amount={2300} date={"2016/05/13"} />
          </li>
        </ul>
      </div>
    );
  }
})