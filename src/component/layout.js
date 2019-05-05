import React from "react"
import $ from "jquery"

import Header from "./header"


export default class Layout extends React.Component {
  componentDidMount() {
   
      $(window).scroll(function () {
          var height = $(window).scrollTop()
          if(height > 100) {
              $(".header").addClass('scrolled')
              $(".sub-header").addClass('header-scroll')
          } else {
              $(".header").removeClass('scrolled')
              $(".sub-header").removeClass('header-scroll')
          }
      })
 
  function closeToggle() {
      $(".collapse.in").removeClass("in");
  }
  }

  render() {
  
    return (
      <React.Fragment>
        <Header />
       
       
      </React.Fragment>
    )
  }
}