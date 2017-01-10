import { createStore ,combineReducers} from 'redux';

const reducerMenu = function (state ={},action){
 	console.log("inside reducerMenu function ");
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
const store = createStore(reducer, {});


export default store;
