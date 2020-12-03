import React from 'react';

class Button extends React.Component {
    text(text) {
        
    }

    render() {
      return (
        <div class = "firstparent"> 
        <button type="button" class="btn btn-primary btn-lg" id="override">{this.props.text}</button>
        <div class = "dot firstchild"></div>
      </div>
    
      );
    }
  }


  export default Button;