import React, { Component } from 'react';
import './js/projects'
import './styles/style.css';

export default class Quarry extends Component {
    state = {  }
    render() {
        return (
            <React.Fragment>
            <div id="_quarry">
            <div className="quarry-container container">
                <div class="catalogue">
                    <div className="row">
                        <div className="col-md-8 col-xs-12">
                            <div id="main-quarry" class="">
                                <img alt="Solabest mining activities" src="images/quarry/001.jpg" />
                            </div>
                        </div>
                        <div className="col-md-4 col-xs-12">
                            <h2 className="quarry-title"></h2>
                            <p className="quarry-desc"></p>
                        </div>
                    </div>
                </div>
                <div className="cat-selector">
                    <div className="row">
                        <div className="col-md-3 col-xs-6 query-row ">
                            <a id="q1" className="">
                                <img alt="Solabest mining activities" src="images/quarry/001.jpg" />
                            </a>
                        </div>
                        <div className="col-md-3 col-xs-6 query-row ">
                            <a id="q2" className="">
                                <img alt="Solabest mining activities" src="images/quarry/002.jpg" />
                            </a>
                        </div>
                        <div className="col-md-3 col-xs-6 query-row ">
                            <a id="q3" className="">
                                <img alt="Solabest mining activities" src="images/quarry/003.jpg" />
                            </a>
                        </div>
                        <div className="col-md-3 col-xs-6 query-row " />
                            <a id="q4" className="">
                                <img alt="Solabest mining activities" src="images/quarry/004.jpg" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
       
        </React.Fragment>
        );
    }
}