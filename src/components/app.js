import React, { Component } from 'react';
import MegaMenu from './megamenu';
import Country from './country';
import {connect } from 'react-redux';

import loadMenu from '../actions/index';
import axios from 'axios';
import data from '../data';


class App extends Component {

localLoadMenu(res){
	console.log("inside localLoadMenu");
	this.props.loadMenu(res);
}
constructor(){
	super();
	this.localLoadMenu = this.localLoadMenu.bind(this);

}

callAxios(){

	if (true ){
	console.log('calling using axios..............');
	let promise =axios.get('http://5845624ae2938412004cf686.mockapi.io/sampleapi/megamenu');
	promise.then(this.localLoadMenu).catch((error)=>{
		console.log("here inside error "+error);
		//this.props.loadMenu(JSON.parse(this.props.data));
	});
	}else {

	this.props.loadMenu(JSON.parse(this.props.data));
	}


}

componentWillMount(){
	this.callAxios();
}


render() {
    	console.log("App render ............");

    	console.log(this.props);
    	if (this.props.menu.topLevelCategories){

    		return (
    			<div className="container">
    			<MegaMenu  menuDetail={this.props.menu.topLevelCategories}/>
    		 	</div>);

    	}else {
    		return <li>empty</li>
    	}

       	  }
}

let mapStateToProps = ({menu})=>{
	return {
		menu,data
	};

}

//connect(mapStateToProps, [mapDispatchToProps], [mergeProps], [options])
export default connect(mapStateToProps,{loadMenu})(App);

//export default App;
