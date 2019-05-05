
import React, { Component } from "react"
import './styles/style.css'




export default class Header extends Component {
  render(){
  return (
    <React.Fragment>
    <div id="slide-show">
    <div id="myCarousel" className="carousel slide">
        <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
            <li data-target="#myCarousel" data-slide-to="3"></li>
            <li data-target="#myCarousel" data-slide-to="4"></li>

        </ol>
        <div className="carousel-inner">
            <div className="carousel-item item active">
                <img className="d-block w-100" alt="Solabest warehouse image" src="images/first-page-slideshow/slideshow1.jpg" alt="First slide" />
              
            </div>
            <div className="carousel-item item">
                <img className="d-block w-100" alt="Solabest industrial activities" src="images/first-page-slideshow/slideshow7.jpg" alt="Second slide" />
              
            </div>
            <div className="carousel-item item">
                <img className="d-block w-100" alt="Solabest office & Showroom" src="images/first-page-slideshow/slideshow3.jpg" alt="Third slide" />
                <div className="carousel-caption d-none d-md-block">
                    <h3 className="animated fadeInDown" style="animation-delay: 2s;">Solabest Office & Showroom</h3>
                </div>
            </div>
            <div className="carousel-item item ">
                <img className="d-block w-100" alt="Solabest warehouse" src="images/first-page-slideshow/slideshow4.jpg" alt="First slide" />
               
            </div>
            <div class="carousel-item item ">
                <img class="d-block w-100" alt="Solabest office" src="images/first-page-slideshow/slideshow5.jpg" alt="First slide" />
             
            </div>
        </div>
        <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
            <span class="icon-prev" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
            <span class="icon-next" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>

    </div>
</div>
    </React.Fragment>
  )
  }
}