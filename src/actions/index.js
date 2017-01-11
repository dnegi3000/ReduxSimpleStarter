
var loadMenu= (payload)=>{
console.log('called load Menu..............');
console.log(payload);
return {
	type:'LOAD_INITIAL',
	data:payload
	}
}
export default loadMenu;