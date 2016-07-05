import React from 'react'
import Slider from 'react-slick'
require('./ReactSlickImages.scss');

export default React.createClass({
  render: function () {
    var settings = {
      dots: true
    }
    return (
      <div className="react-slick-images-component">
        <h2 className="slds-text-heading--medium">React Slick Images</h2>
        <div className='container'>
          <Slider {...settings}>
            <img src='https://placehold.jp/1000x300.png' />
            <img src='https://placekitten.com/1000/300' />
            <img src='https://placehold.jp/1000x300.png' />
            <img src='https://placekitten.com/1000/300' />
          </Slider>
        </div>
      </div>
    );
  }
})