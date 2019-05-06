import React,{Component} from 'react';
import Layout from "./component/layout"
import ControlledCarousel from "./component/testcarousel"
import Product from './component/product'
import Modal1 from './component/specialdeals.js'
import Quarry from './component/quarry';
import Project from './component/project'
export default class  App extends Component {
  render(){
    return (
      <div className="App">
    <Layout/>
     <ControlledCarousel/>
     <Product/>
     <Modal1/>
     <Quarry/>
     <Project/>
      </div>
    );
  }
}

