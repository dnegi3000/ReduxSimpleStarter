import React,{ Component } from 'react';


class MenuHelper extends  Component {


renderCats(cats){
        console.log(cats);
        return (

				<thead>
        			<tr>
                       
        			{cats.map((cat)=>{
                  return (
		                 	<th key={cat.id}>
                  			<a key={cat.id}>  {cat.displayName}</a>
                  			{this.renderSubCat(cat) } 

        		            </th>

        		            
        		            );


                  })}
        		</tr>
        		</thead>


        		);
                    
}

renderSubCat(cat){

			if (cat.childcategories){
		  return (
		  	     <tr><td>{cat.childcategories.map((subCat)=>{
                 		 return (<br key={subCat.id}><a key={subCat.id}>{subCat.displayName}
                    </a></	br>
                     );
                  })}
		  	     </td></tr>

		  );
		  }
}

render(){
	console.log("helper..");
	console.log(this.props.detail);
	if(this.props.detail)
	{
		return (
			       
                 <table className="table table-responsive">
                          {this.renderCats(this.props.detail)}
                           
                      
                     </table>   
			  	
       
			 
			  );
	}
		
 } 
}

export default MenuHelper;


  
