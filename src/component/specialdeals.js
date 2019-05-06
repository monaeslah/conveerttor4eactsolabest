import React, { Component } from 'react';
import './styles/style.css'




 
export default function Modal1() {

    
        return (
          <React.Fragment>
          <div id="submition">

           
          <div className=" bg-text modal-form-container">
            <div className="text-1"><p>Intersted in our Exclusive Products?</p>  </div> 
            <br/>
            <div className="text-2"><p>To get informed about our <span class="special-deal">special deals</span> , Please input your email address.</p> </div>
            <div className="mt-1 d-flex input-modal-text"  >
                 
              <input   id="ex3" type="text" placeholder="Please Insert Your Email Addreess" />
            </div>
           <br/>
           <button type="submit"  type="button" className="btn-lg buttn-sub" >Submit</button>
          </div>
          
                  </div>

</React.Fragment>
        );
    }
