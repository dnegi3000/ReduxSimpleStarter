import { createStore ,combineReducers} from 'redux';

const reducerMenu = function (state ={},action){
 	console.log("inside reducerMenu function ");
 	if (action.TYPE='LOAD_INITIAL')
 	{
 		console.log(action);
 		let newState ={...state, menu:action.data};
 		console.log("new State");
 		console.log(newState);
 		return newState;
 	}
 	
 	console.log(state);
	return state;
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
let store = createStore(reducer, {});	


export default store;
