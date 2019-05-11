
import React, { Component } from "react"
import './styles/style.css'




export default class Header extends Component {
  render(){
  return (
    <React.Fragment>
    <div id="toggle" class="navbar-in-mobile">
    <div class="pos-f-t">
        <div class="collapse" id="navbarToggleExternalContent">

            <div class="bg-dark p-4">
                <a id="header-logo" class="logo-toggle" href="#">
                    <div><img src="images/logo-large.png" /></div>
                </a>
                <ul class="nav navbar-nav">
                    <li id="menu-item-1" class="active"><a  onclick="closeToggle()" href="#">Home <span class="sr-only">(current)</span></a></li>
                    <li id="menu-item-2" class="dropdown" onclick="document.getElementById('_products').scrollIntoView();">
                        <a class="dropdown-toggle" data-toggle="dropdown">Products</a>
                        <ul class="dropdown-menu" id="producti-menu-toggle">
                        </ul>
                    </li>
                    <li id="menu-item-5"><a onclick="closeToggle()" href="#_quarry">Quarry</a></li>
                    <li id="menu-item-4"><a onclick="closeToggle()" href="#_projects">Projects</a></li>
                    <li id="menu-item-6"><a onclick="closeToggle()" href="#_contact-us">Contact us</a></li>
                    <li id="menu-item-7"><a href="about.html">About us</a></li>
                    <li id="menu-item-8"><a href="https://solabest.com/blog">Highlights</a></li>
                </ul>
            </div>
        </div>
        <nav class="navbar navbar-dark bg-dark">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent"
                aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button>
        </nav>
    </div>
</div>
<nav class="navbar navbar-default navbar-fixed-top header">
    <div class="navbar-header">
        <a id="header-logo" class="navbar-brand" href="#">
            <div><img src="images/logo-large.png" /></div>
        </a>
    </div>

    <div class="sub-header collapse" id="wide-nav">
        <ul class="nav navbar-nav">
            <li class="menu-item-1" id="menu-item-1" class="active"><a href="#">Home <span class="sr-only">(current)</span></a></li>
            <li id="menu-item-2" class="dropdown" onclick="document.getElementById('_products').scrollIntoView();">
                <a class="dropdown-toggle" data-toggle="dropdown">Products</a>
                <ul class="dropdown-menu products-uniq-id">
                </ul>
            </li>
            <li id="menu-item-5" class="menu-item-5"><a href="#_quarry">Quarry</a></li>
            <li id="menu-item-4" class="menu-item-4"><a href="#_projects">Projects</a></li>
            <li id="menu-item-6"><a href="#_contact-us">Contact us</a></li>
            <li id="menu-item-7"><a href="about.html">About us</a></li>
            <li id="menu-item-8"><a href="https://solabest.com/blog">Highlights</a></li>
        </ul>
    </div>
    <div class="lang">
    </div>
</nav>
    </React.Fragment>
  )
}

}
