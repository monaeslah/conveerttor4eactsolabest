import React, { Component } from 'react';
import './styles/style.css'
import Background from './images/bg_blur.jpg'


let style={
  backgroundImage: `url(${Background})`
 }

 
export default function modal1() {

    
        return (
            
<div>
<div class="bg-image" style={style} ></div>
<div class=" bg-text modal-form-container">
  <div class="text-1"><p>Intersted in our Exclusive Products?</p>  </div> 
  
  <div class="text-2"><p>To get informed about our <span class="special-deal">special deals</span> , Please input your email address.</p> </div>
  <div class="mt-1 d-flex input-modal-text"  >
  <br />
    <input   id="ex3" type="text" placeholder="Please Insert Your Email Addreess" />
  </div>
  <br />
 <button type="submit"  type="button" class="btn btn-lg buttn-sub" >Submit</button>
</div>
</div>


        );
    }
