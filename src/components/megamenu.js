import React , { Component } from 'react';
import  MenuHelper from './menuhelper';

class  MegaMenu extends Component {


render(){ 
	console.log('MegaMenu render.........................');
    console.log(this.props);
	if (this.props && this.props.menuDetail )
		{
            console.log('In Mega Menu render Check if props empty .........................');
			console.log(this.props.menuDetail);
	
	return (  <div>
                 <MenuHelper detail={this.props.menuDetail} />
       		</div>
		);
    }
    else {
        return <div> Empty</div>
    }


}

}
export default MegaMenu;
