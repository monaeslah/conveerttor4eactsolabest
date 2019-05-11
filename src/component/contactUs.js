import React, { Component } from 'react';
import { Container, Row, Col ,Form,yup , Button} from 'react-bootstrap' 
import './styles/style.css'
export default class Contact extends Component {

    render() {
       
        return (
           
            <React.Fragment>
            <div className="contact contact-main" id="_contact-us">
           
            <Row>
          
            
            <div className="col-md-8 contact-data" id="info">
            <div className="info-box">
                <div id="solabest-address">
                    <b>OFFICE ADDRESS :</b>
                    <p className="address">Unit. 2,No, Banafshe Dead-End Ali Mohammadi Alley, Mirzapour Street,Shariati Street, Tehran, IRAN</p>
                    <p className="solabest-tel" id="solabest-tel">
                        <b>	TEL :</b> +9821 2610 2040
                    </p>
                    <b>WAREHOUSE ADDRESS:</b>
                    <p className="address">End of 7th Golbon, Boostan Blvd, Shams abad industrial city, IRAN</p>
                    <p className="solabest-tel" id="solabest-tel">
                        <b>	TEL :</b> +9821 5623 6737
                    </p>
                </div>
                <div>
                    <p id="solabest-email">
                            <b>EMAIL : </b> info@solabest.com
                        </p>
                     
                    <p></p>
                </div>
                <div class="social">
                    <a href="#" class="fa fa-facebook"></a>
                    <a href="https://www.instagram.com/solabeststone/" class="fa fa-instagram"></a>
                    <a href="https://www.linkedin.com/company/12586685/admin/" class="fa fa-linkedin"></a>
                    <a href="#" class="fa fa-twitter"></a>
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3254.016977363258!2d51.212133951257734!3d35.355224980174825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDIxJzE4LjgiTiA1McKwMTInNTEuNiJF!5e0!3m2!1sen!2sae!4v1549116483268"
          style={{"border":"0"}} >
           </iframe>      
            </div>
         
           
           
            <Col md={4}>
            <h3>Contact Us :</h3>
            <span style={{"color":"white"}}>
            Name:
          </span>
            <Form.Control type="text" />
            <br />
            <span style={{"color":"white"}}>
            Phone Number:
          </span>
            <Form.Control type="text" />
            <br />
            <span style={{"color":"white"}}>
            Email Address:
          </span>
            <Form.Control type="text"  />
            <br />
            <span style={{"color":"white"}}>
            Message:
          </span>
            <Form.Control size="lg"  type="text" />
            <br/>
            <Button variant="light" type="submit">Submit</Button>
            </Col>

            </Row>
          
            </div>
            </React.Fragment>
        );
    }
}