import React, { Component } from 'react';
import './js/slideproduc'
import { Container, Row, Col} from 'react-bootstrap'
import './styles/style.css'
export default class Slideshow extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			slideShowIndex:0,
			images: [
				"images/products/chini_aligoodarz.jpg",
				"images/products/granit_black_zebra.jpg",
				"images/products/onyx_multicolor.jpg",
				"images/products/travertian_ada_titanium.jpg",
			],
		  	currentIndex: 0
		}
	  }
	increamentSlide=(inc)=>{
		this.setState({
			slideShowIndex:(Math.min(this.state.slideShowIndex+inc,0))%this.state.images.length
		})

	}  
	setCurrentSlide=(indx)=>{
		this.setState({
			slideShowIndex:indx
		})
	}
    render() {
        return (
	<React.Fragment>
	<Container className="container-slide col-md-12" >
            <Row className=" full-page">
			<Col xs={12} md={6} sm={6}  className="figure-page" >



                    <div>
                        <div className="numbertext">{`${this.state.slideShowIndex+1} / ${this.state.images.length}`}</div>
                        <img src={this.state.images[this.state.slideShowIndex]} alt="" />
                    </div>

                   





                    <Row >
						<div className="col-container" >
						{
							this.state.images.map((img,imgIndex)=>{
								return (
									<div className="col-xs-3 first-img-slideproduc" >
										<img className="demo cursor" src={img}
											onClick={()=>{this.setCurrentSlide(imgIndex)}} alt="" />
									</div>
							   
								)
							})
						}
                           
                        </div>
						</Row>
						<a className="jj" onClick={()=>{this.increamentSlide(-1)}}>❮</a>
						<a className="jj" onClick={()=>{this.increamentSlide(+1)}}>❯</a>



                </Col>
                <Col xs={12} md={6} sm={6}> 
                <div  className="produc-slide-description">
                    <span>
                        <h2>Products</h2>
                        <h3>Some product subhead</h3>
                        <p>Product description goes here. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                            commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                            montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
                            sem. Nulla consequat massa quis enim.</p>
                        <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
                            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer
                            tincidunt. Cras dapibus.</p></span>
                        </div>
                        <div className="lower-buttn-slideproduc">

                                <div className="Produc-price-slide"> Pric:<span> 1234000 R</span> </div>
                            <span></span>
                            
                                    <button className="btn  btn-warning   cards-submit-style ">Request This Product</button>

                            
                        </div>    
                    </Col>
                 
            </Row>
           </Container> 
	
		</React.Fragment>
		)}
	}

