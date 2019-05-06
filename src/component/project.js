import React, { Component } from 'react';
// import { Link } from 'react-dom'
import './js/data'
import './styles/style.css';





export default class Project extends Component {
    state = {  }
    render() {
        return (
            <React.Fragment>
        <div className="gallery" id="_projects">
        <h2 className="projects-title"></h2>
        <div className="container">
            <div className="carousel-wrap">
                <div className="bootleggers owl-carousel">
                    <a className="item popup" to="/">
                        <img alt="Solabest projects" src={"images/projects/2.jpg"}  alt="Bootleggers Ball" />
                    </a>
                    <a className="item popup" to="images/projects/2.jpg">
                        <img alt="Solabest projects" src={"images/projects/2.jpg"}  alt="Bootleggers Ball" />
                    </a>
                    <a className="item popup" to="images/projects/3.jpg">
                        <img alt="Solabest projects" src={"images/projects/2.jpg"}  alt="Bootleggers Ball" />
                        </a>
                    <a className="item popup" to="images/projects/4.jpg">
                        <img alt="Solabest projects" src={"images/projects/2.jpg"}  alt="Bootleggers Ball" />
                    </a>
                    <a className="item popup" to="images/projects/5.jpg">
                        <img alt="Solabest projects" src={"images/projects/2.jpg"}  alt="Bootleggers Ball" />
                    </a>
                    <a className="item popup" to="images/projects/6.jpg">
                        <img alt="Solabest projects" src={"images/projects/1.jpg"}  alt="Bootleggers Ball" />
                    </a>

                </div>
            </div>
        </div>

    </div>
    </React.Fragment>
        );
    }
}