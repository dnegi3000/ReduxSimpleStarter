import React,{ Component } from 'react';
import SubCat from './SubCat'

class MenuHelper extends  Component {

renderCats(cats){
        console.log(cats);
        return (
                cats.map((cat)=>{
                    return(
                        <SubCat  subCategory={cat}/>
                      )
                  })
          );
}


render(){
  console.log("helper..");
  if(this.props.detail)
    {
      return (
        <div className="dropdown">
            {this.renderCats(this.props.detail)}
        </div>
        );
  }

}
}

export default MenuHelper;
