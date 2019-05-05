import React, { Component } from 'react';
import { Container ,Row , Col} from 'react-bootstrap'

import './styles/style.css'

export default class Modal2 extends Component {
    state = {  }
    render() {
        return (
            <React.Fragment>
            
        <Container>

             <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
                    Open modal
            </button>


            <div className="modal fade " id="myModal">
            <div className="modal-dialog modal-dialog-centered modal-xl">
                 <div className="modal-content content-padding">
    
                  <div >
                      <h4 className="modal-title ">
                     <p className="modal-title w-100 font-weight-bold modal-header-style">We Will Get in Touch with You As soon As Possible.</p>
                  </h4>
       
                            </div>
     
                          <div className="modal-body input-placeholder ">
                                <div  className="colorHolder md-form mt-3 mb-5">
                                  <input type="password" name="password" className="py-4 havePlace form-control validate"/>
                                 <label>Name </label>
                                 </div>
            
                    <div className="md-form mb-4 colorHolder">
                            <input type="email" id="form2"   className="py-4 havePlace form-control validate "/>
                               <label> Your Work Email </label>    
                              </div>
                          <div className="md-form  colorHolder mt-5">
                              <Row>
                                 <div className="colorHolder  col-3">
                                  <input type="text" className=" py-4 havePlace form-control " />
                              <label > Country Code</label>
                                </div>
                               <div className="colorHolder  col-9">
                               <input type="text" className="py-4 havePlace form-control  " />
                           <label >Phone Number</label>
                        </div>
                      </Row>
                
                 
                         </div>
                    </div>
                    
                       <div>
                       <button type="submit"  className="submit-style  buttn-sub btn-modal-sub" >submit </button>       
           
                       <button type="submit"  className="py-3 btn   mt-5  submit-style btn-modal-sub">cancel </button>
            
            </div>
                                       </div>       
     
                                   </div>
                                        </div>
                                                </Container>

          </React.Fragment>
       
            
        );
    }
}