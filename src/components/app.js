import React, { Component } from 'react';
import MegaMenu from './megamenu';
import Country from './country';
import {connect } from 'react-redux';

import loadMenu from '../actions/index';
import axios from 'axios';
import data from '../data';


class App extends Component {

callAxios(){
	
	if (true ){
	console.log('calling using axios..............');
	let promise =axios.get('http://5845624ae2938412004cf686.mockapi.io/sampleapi/megamenu');
	promise.then((res)=>{
			console.log("Calling loadMenu from App constructor.............");
		this.props.loadMenu(res);

	}).catch((error)=>{
		console.log(error);
		this.props.loadMenu(JSON.parse(this.props.data));		
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
    			<div>
    			<MegaMenu  menuDetail={this.props.menu.topLevelCategories}/>
    		 	</div>);
	
    	}else {
    		return <li>empty</li>
    	}

       	  }
}

let mapStateToProps = (state)=>{
	console.log(".state.....");
	console.log(state);
	return {
		menu: state.menu,
		data



	};
	
}

//connect(mapStateToProps, [mapDispatchToProps], [mergeProps], [options])
export default connect(mapStateToProps,{loadMenu})(App);

//export default App;
	