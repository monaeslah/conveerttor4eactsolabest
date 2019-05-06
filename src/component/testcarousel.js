import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './styles/style.css'
import './styles/animate.min.css'
import './styles/top-slider.css'


export default class ControlledCarousel extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/first-page-slideshow/slideshow1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
          <h3 className="animated fadeInDown" >Solabest Office & Showroom</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/first-page-slideshow/slideshow7.jpg"
            alt="Third slide"
          />

         
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/first-page-slideshow/slideshow3.jpg"
            alt="Third slide"
          />

        
        </Carousel.Item>
      </Carousel>
    );
  }
}

