import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import './styles/style.css'
import {products,quarry,staticContent } from './js/data'

export default class Page3 extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div id="_products" className="parallax " >

               
                    <div>
                        <Container>
                            <Row>
                                <Col className="main-page-produc" xs={12} md={12} sm={12}>

                                    <div className="products-descrip">
                                        <h2 className="product-title">products</h2>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia quod laboriosam adipisci maiores fugiat eius totam? Ut blanditiis expedita earum corporis porro in omnis aspernatur facilis molestiae. Nam, quibusdam dolorem.</p>
                                    </div>

                                </Col>
                            </Row>
                            <Row>

                            {
                                products.map(product=>{
                                    return (
                                        <Col md={4} sm={6}>
            
                                                <div className="thumbnail" id="pr1">
                                                    <img src={`${product.img}`} alt="..." />
                                                    <div>
                                                        <div className="card-dedcrip">lorem</div>
                                                        <button className="btn btn-lg btn-block  cards-submit-style" >See More </button>
                                                    </div>
                                                </div>
            
                                            </Col>
                                    )
                                })
                            }

                             
                            </Row>
                        </Container>
                    </div>

                </div>
                </React.Fragment>
                );
            }
}