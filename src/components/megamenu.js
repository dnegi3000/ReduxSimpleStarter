import React , { Component } from 'react';
import store from './reducers/index'
import axios from 'axios'
class  MegaMenu extends Component {

componentWillMount(){
	console.log(axios);

	axios.get('/user?ID=12345').then(function (response) {
		    console.log(response);
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
