import React from 'React';

 function SubCat(props){
   console.log(props);
    return(
        <div style={{display : 'inline-block'}}>
            <button key={props.subCategory.id} className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
                  {props.subCategory.displayName}
                <span className="caret"></span>
            </button>
            <ul className="dropdown-menu" >
                  {renderSubCat(props.subCategory)}
            </ul>
        </div>      );
}

function renderSubCat(cat){
    if (cat.childcategories){
        return (
            cat.childcategories.map((subCat)=>{
              console.log('ID = ' + subCat.id);
               return (
                    <li>
                        <a href="#" >{subCat.displayName}</a>
                    </li>
                     );
               }));
      }
}

export default SubCat;
