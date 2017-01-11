import React, { Component } from 'react';
import MegaMenu from './megamenu';
import Country from './country';
import {connect } from 'react-redux';
import store from '../reducers/index';
import axios from 'axios';
import loadMenu from '../actions/index';



class App extends Component {

 constructor(props){
	super(props);
	console.log(axios);
	axios.get('http://5845624ae2938412004cf686.mockapi.io/sampleapi/megamenu').then(function (response) {
		    console.log(response.data);
		    store.dispatch(loadMenu(response.data));

  		}).catch(function (error) {
    console.log(error);
  });


}

  render() {
    return (
   			<div>
        	  <MegaMenu  state={store.getState()}/>
 	     	</div>
   		 );
  }
}

mapStateToProps(){
	
}
connect(mapStateToProps, [mapDispatchToProps], [mergeProps], [options])
export default App;
