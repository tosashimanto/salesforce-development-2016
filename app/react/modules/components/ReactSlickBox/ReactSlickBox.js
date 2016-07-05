import React from 'react'
import Slider from 'react-slick'
import ReactSlickStarter from '../ReactSlickStarter/ReactSlickStarter'
import ReactSlickImages from '../ReactSlickImages/ReactSlickImages'
require('./ReactSlickBox.scss');

export default React.createClass({
  render: function () {
    return (
      <div className="react-slick-box-component">
        <div className="bottom-margin">
          <ReactSlickStarter />
        </div>
        <div className="bottom-margin">
          <ReactSlickImages />
        </div>
        <div>
          <ul className="slds-list--dotted">
            <li><a href="https://github.com/akiran/react-slick" target="_blank">"https://github.com/akiran/react-slick"</a></li>
            <li><a href="https://jsfiddle.net/kirana/20bumb4g/" target="_blank">"https://jsfiddle.net/kirana/20bumb4g/"</a></li>
          </ul>
        </div>
      </div>
    );
  }
})