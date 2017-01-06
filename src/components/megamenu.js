import React , { Component } from 'react';

class  MegaMenu extends Component {

render(){
    this.state = {  
        category: {}
    }
    console.log(this.props);
    console.log(this.state);
    return (
    <div>
    <div className="dropdown">
    <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
        Dropdown
        <span className="caret"></span>
    </button>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
        <li><a href="#">Action</a></li>
        <li role="separator" className="divider"></li>
        <li><a href="#">Separated link</a></li>
     </ul>
 
    </div>
   </div>
        
           );
    }
}

export default MegaMenu;