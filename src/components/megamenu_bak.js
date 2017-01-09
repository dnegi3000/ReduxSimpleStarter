import React , { Component } from 'react';
import Task from './task';

class  MegaMenu extends Component {

addToDo(event){
    console.log("inside the addtodo method");
    console.log(event);
    event.preventDefault();
    var newState = {
        category: {},
        currentValue:'',
        todo: [ ...this.state.todo,{taskName:this.state.currentValue,completed:false}]
    }

  this.setState(newState);
}

constructor(props){
    super(props);
    this.state = {  
        category: {},
        currentValue:'',
        todo : [{}]
    }
}

toDoChange(event){
    console.log("target value");
    console.log(event.target.value);
    var newState = {... this.state};
    newState.currentValue = event.target.value;
    console.log(newState);
    this.setState(newState);
    console.log("new state");
        
    console.log(this.state);
}

render(){
    
    console.log(this.props);
    console.log(this.state);
    return (

    <div>
      <form onSubmit={this.addToDo.bind(this)} >  
      <input type="text"  onChange={this.toDoChange.bind(this)}>
      </input> 
      <button type="submit" value="submit" className="btn btn-default" >
         Add Task Todo list 
      </button>
      </form>

    <Task  tasks={this.state}>
    </Task>





    <div className="dropdown">
     <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
        Dropdown
        <span className="caret"></span>
     </button>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
        <li><a href="#">Action</a></li>
        <li role="separator" className="divider"></li>
        <li><a href="#">Separated link</a></li>
     </ul>

 
    </div>
   </div>
        
           );
    }
}

export default MegaMenu;