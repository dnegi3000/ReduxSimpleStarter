import React from 'react';


var  MenuHelper = function(props ){

	console.log("helper..");
	console.log(props.menuDetail);
	
	if(props.menuDetail.topLevelCategories){
			return topLevelCategories.forEach((cat)=>{
			<link >console.log(cat.displayName)</link>;
		} );
			
	}else {
		return <h1>menu</h1>
	}

}

export default MenuHelper;