import React , { Component } from 'react';

class  MegaMenu extends Component {

render(){
    this.state = {  
    category: {}
}
    console.log(this.props);
    console.log(this.state);
    return <div>hello ........................Mega Menu</div>;
    }
}

export default MegaMenu;