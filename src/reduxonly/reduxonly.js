var  redux =require( 'redux');

console.log(redux);



function reducer(state,action){
    console.log(action);
	switch (action.type){
		case 'CAHNGE_NAME' : 
		{
			return {
				...state,
				name:action.payload.name

			}
		}
		case 'CAHGNE_AGE':{
			return {
				...state,
				age:action.payload.age 
			}
		}
	}

}


let store = redux.createStore(reducer);
console.log(store);

store.subscribe(() =>{
  console.log(store.getState()+'1111111111111111');
  console.log(store.getState());
}
);

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch({ type: 'CAHNGE_NAME' ,payload:{name:'Amrita',age:"20"}})

console.log(store);
// 1
store.dispatch({ type: 'CAHGNE_AGE',payload:{name:'Deepak',age:"30"} })
// 2
store.dispatch({ type: 'CAHGNE_AGE', payload:{name:'AGE',age:"40"}})
