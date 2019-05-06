import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './styles/style.css';
import {products,quarry,staticContent } from './js/dataproduc';

export default class Product extends Component {
    state = {  }
    render() {
        return (
            <React.Fragment>
            <div id="_products" class="parallax">
            <h2 class="product-title">products</h2>
            <div>
                <div class="container">
                    <div class="row">
                    {
                        products.map(product=>{
                            return (
                                <Col md={3} sm={6}>
    
                                        <div className="thumbnail" id="pr1">
                                            <img src={`${product.img}`} alt="..." />
                                            <div>
                                                <div className="card-dedcrip">lorem</div>
                                                <button className=" btn-lg btn-block  cards-submit-style" >See More </button>
                                            </div>
                                        </div>
    
                                    </Col>
                            )
                        })
                    }

                       
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
        );
    }
}