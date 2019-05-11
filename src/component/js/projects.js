import React, { Component } from 'react';
import $ from" jquary"

$(function() {
    $('.pop').on('click', function() {
        $('.imagepreview').attr('src', $(this).find('img').attr('src'));
        $('#imagemodal').modal('show');   
    });		
});

$(document).ready(function() {
    $(".popup").magnificPopup({
      type: "image",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: true,
      gallery: {
        enabled: true
      }
    });
  });
  console.log(lang)
  $(".bootleggers").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText:  [
      "<i class='fa fa-caret-left'></i>",
      "<i class='fa fa-caret-right'></i>"
    ],
    responsive: {
      0 : {
        items:1,
        nav: true,
        navText:  [
          "<i class='fa fa-caret-left'></i>",
          "<i class='fa fa-caret-right'></i>"
        ],
      },
      // breakpoint from 480 up
      480 : {
        items:1,
        nav: true,
        margin: 10,
        navText:  [
          "<i class='fa fa-caret-left'></i>",
          "<i class='fa fa-caret-right'></i>"
        ],
      },
      // breakpoint from 768 up
      768 : {
        items:2,
        margin: 10,
        nav:true
      },
      920: {
        items:3.2,
        nav:true
      }
    }
  });


lang == "fa" ?
 $(".carousel-wrap").css("direction", "ltr"): '';
lang == "fa" ?
  $(".quarry-title").css("text-align", "right") : $(".quarry-title").css("text-align", "left");



 