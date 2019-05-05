import React, { Component } from 'react';
import '../App.css';


// export default class Modal2 extends Component
export default class Input extends Component {
 constructor() {
  super();
this.state = {
   inputValue: '',
   fieldActive: false
  }
 };
 this.updateInputValue = this.updateInputValue.bind(this);
 this.activateField = this.activateField.bind(this);
 this.disableFocus = this.disableFocus.bind(this);

// to activate the input field while typing
activateField() {
  this.setState({
   fieldActivate: false
  })
 }
// to deactivate input only if it's empty
 disableFocus(e) {
  if (e.target.value === "") {
              this.setState({
                  fieldActivate: false
              })
         }
 }
// to update the changes in the input and activate it
 updateInputValue(e) {
  this.setState({
   inputValue: e.target.value,
  });
  this.activateField(e);
  e.preventDefault();
 }
render() {
  return (
   <div>
    <form>
     <div className="field-group">
     <label
     // check state the input, whether it is active then apply the class for floating label
     className={this.state.fieldActive ? "field-active" : ""}
     >
       Name
     </label>
     <input
      className="floating-label"
      type="text"
      value={this.state.inputValue}
      onFocus={this.activateField}
      onBlur={this.disableField}
      onChange={this.updateInputValue}
     />
     </div>
    </form>
   </div>
  );
 }
}
