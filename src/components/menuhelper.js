import React,{ Component } from 'react';


class MenuHelper extends  Component {

render(){
	console.log("helper..");
	console.log(this.props.detail);
	if(this.props.detail)
	{
		return (<a>{this.props.detail.displayName}</a>);
	}
		
 } 
}

export default MenuHelper;