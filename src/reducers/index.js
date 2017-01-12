import { createStore ,combineReducers} from 'redux';

const reducerMenu = function (state ={},action){
 	console.log("inside reducerMenu function ");

 	 console.log(state);
 	if (action.type='LOAD_INITIAL' && action.data)
 	{
 		console.log("inside the reducer with action LOAD_INITIAL");
 		console.log(action.data);
 		let newState ={...action.data};
 		console.log("new State");
 		console.log(newState);
 		console.log("returning with new state");
 		return newState;
 			
 		
 	}else {
 		console.log("returning with old state");
 		
 		return state ;
 	}

 
}

const reducerCart = function (state ={},action){
 	console.log("inside reducerCart function ");
  	return state;
}

const prodReducer = function (state ={},action){
 	console.log("inside reducerProduct function ");
  return state;
}
const reducer = combineReducers({
	menu  	: reducerMenu,
	cart 	: reducerCart ,
	product :prodReducer 
});
//let store = createStore(reducer);	


export default reducer;
