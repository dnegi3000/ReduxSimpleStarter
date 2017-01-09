import React from  'React';

function Task(props){
	console.log('TASK COMPONNENT RENDERING............');
	
	console.log(props);
		if (props.tasks.todo)
		{

		return (
			<div>
				Task List  :
					{props.tasks.todo.map((todoitem)=>{
						return (<li>
						<input type="checkbox"> {todoitem.taskName} </input>	
						 </li>)
						
					}
					
					)}

			</div>
		);	

		}else 
		{
			return (<Div>Task List</Div>);

		}
}
export default Task;