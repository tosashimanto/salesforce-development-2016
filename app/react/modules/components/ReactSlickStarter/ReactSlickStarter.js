import React from 'react'
import Slider from 'react-slick'
require('./ReactSlickStarter.scss');

export default React.createClass({
  render: function () {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="react-slick-starter-component">
        <h2 className="slds-text-heading--medium">React Slick Starter</h2>
        <div className="container">
          <Slider {...settings}>
            <div className="slick-demo"><h3>1</h3></div>
            <div className="slick-demo"><h3>2</h3></div>
            <div className="slick-demo"><h3>3</h3></div>
            <div className="slick-demo"><h3>4</h3></div>
            <div className="slick-demo"><h3>5</h3></div>
            <div className="slick-demo"><h3>6</h3></div>
          </Slider>
        </div>
      </div>
    );
  }
})