import React from  'React';

function Task(props){

		if (props.todo)
		{
			return (<Div>Task List</Div>);
		}else 
		{

		return (
			<div>
				Task List  :
					props.todo.map((todoitem)=>{

						<li></li>
					}
					
					);
			</div>
		);	

		}
}
export default Task;