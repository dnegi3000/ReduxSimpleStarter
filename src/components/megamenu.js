import React , { Component } from 'react';
import  MenuHelper from './menuhelper'


class  MegaMenu extends Component {


render(){ 
	console.log('.........................');
	console.log(this.props);
	console.log('.........................');
	if (this.props && this.props.state)
		{
			console.log(this.props.state.menu);
		}

	return (
		  <div>MENu
		    <MenuHelper menuDetail={this.props.state.menu}/>	
			</div>
		);
}

}
export default MegaMenu;
