import React , { Component } from 'react';
import  MenuHelper from './menuhelper';

class  MegaMenu extends Component {

renderCats(cats){
        console.log(cats);
        return (cats.map((cat)=>{
                  return (<div key={cat.displayName}><MenuHelper detail={cat} />
                    
                    </div> );
                  }));
                    
}


render(){ 
	console.log('MegaMenu render.........................');
    console.log(this.props);
	if (this.props && this.props.menuDetail )
		{
            console.log('In Mega Menu render Check if props empty .........................');
			console.log(this.props.menuDetail);
		

	return (

                 <div>
                       {this.renderCats(this.props.menuDetail)}
        		</div>
		);
    }else {
        return <div> Empty MM</div>
    }


}

}
export default MegaMenu;
