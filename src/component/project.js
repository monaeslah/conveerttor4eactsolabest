import React, { Component } from 'react';

// import { Link } from 'react-dom'
import Navigator from "./navigator"
import Item from "./Item"
import "./styles/test.css"
import './styles/style.css';



  

  
  export default class Carousel extends Component {
    values = [
        { title: 'Sixth', images: 'images/projects/1.jpg' },
        { title: 'Sixth', images: 'images/projects/2.jpg' },
        { title: 'Sixth', images: 'images/projects/3.jpg' },
        { title: 'Sixth', images: 'images/projects/4.jpg' },
        { title: 'Sixth', images: 'images/projects/5.jpg' },
        { title: 'Sixth', images: 'images/projects/6.jpg' }
     
    ];
    
    constructor(props) {
      super(props);
      
      this.leftClick = this.leftClick.bind(this);
      this.rightClick = this.rightClick.bind(this);
      
      this.state = {
        startIndex: 0,
        items: [],
        loading: true
      };
      
      this.loadData();
    }
  
    loadData() {
      this.state.loading = false;
      this.state.items = this.getNewItems(this.state.startIndex);
    }
  
    getNewItems(startIndex) {
      return [
        this.values[startIndex],
        this.values[this.getNext(startIndex)],
        this.values[this.getNext(this.getNext(startIndex))]
      ];
    }
  
    getNext(current) {
      if (current === this.values.length - 1) {
        return 0;
      } else {
        return current + 1;
      }
    }
  
    getPrev(current) {
      if (current === 0) {
        return this.values.length - 1;
      } else {
        return current - 1;
      }
    }
    
    render() {
      if (this.state.loading) {
        return (
          <div class='carousel'>
            Loading...
          </div>
        );
      } else {
        return (
            
        <div className="gallery" id="_projects">
        <h2 className="projects-title"></h2>
        <div className="container">
            <div className="carousel-wrap">
        <div className="owlcarousel"> 
         <div className='carousel'>
          
            <Navigator click={this.leftClick} label='<'/>
            <Item images={this.state.items[0].images} />
            <Item   images={this.state.items[1].images} />
            <Item  images={this.state.items[2].images} />
            <Navigator click={this.rightClick} label='>' />
          </div></div></div></div></div>
        );
      }
    }
    
    leftClick() {
      this.setState((state, props) => {
        const newStartIndex = this.getPrev(state.startIndex);
        return {
          startIndex: newStartIndex,
          items: this.getNewItems(newStartIndex)
        };
      });
    }
    
    rightClick() {
      this.setState((state, props) => {
        const newStartIndex = this.getNext(state.startIndex);
        return {
          startIndex: newStartIndex,
          items: this.getNewItems(newStartIndex)
        };
      });
    }
  }
  

  
  



// export default class Project extends Component {
//     state = {  }
//     render() {
//         return (
//             <React.Fragment>
//         <div className="gallery" id="_projects">
//         <h2 className="projects-title"></h2>
//         <div className="container">
//             <div className="carousel-wrap">
//                 <div className="bootleggers owl-carousel">
//                     <a className="item popup" to="/">
//                         <img alt="Solabest projects" src={"images/projects/2.jpg"}  alt="Bootleggers Ball" />
//                     </a>
//                     <a className="item popup" to="images/projects/2.jpg">
//                         <img alt="Solabest projects" src={"images/projects/2.jpg"}  alt="Bootleggers Ball" />
//                     </a>
//                     <a className="item popup" to="images/projects/3.jpg">
//                         <img alt="Solabest projects" src={"images/projects/2.jpg"}  alt="Bootleggers Ball" />
//                         </a>
//                     <a className="item popup" to="images/projects/4.jpg">
//                         <img alt="Solabest projects" src={"images/projects/2.jpg"}  alt="Bootleggers Ball" />
//                     </a>
//                     <a className="item popup" to="images/projects/5.jpg">
//                         <img alt="Solabest projects" src={"images/projects/2.jpg"}  alt="Bootleggers Ball" />
//                     </a>
//                     <a className="item popup" to="images/projects/6.jpg">
//                         <img alt="Solabest projects" src={"images/projects/1.jpg"}  alt="Bootleggers Ball" />
//                     </a>

//                 </div>
//             </div>
//         </div>

//     </div>
//     </React.Fragment>
//         );
//     }
// }