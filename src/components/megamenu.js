import React , { Component } from 'react';
import store from '../reducers/index';
import axios from 'axios';
class  MegaMenu extends Component {

componentWillMount(){
	console.log(axios);
	axios.get('http://5845624ae2938412004cf686.mockapi.io/sampleapi/megamenu').then(function (response) {
		    console.log(response.data);
		    
  		}).catch(function (error) {
    console.log(error);
  });
}

render(){ 

	return (
		<div>
		    is the Mega menu component
		</div>
		);
}

}
export default MegaMenu;
