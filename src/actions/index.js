var loadMenu= (res)=>{
console.log('called load Menu..............');
console.log(res);
return  {
	type:'LOAD_INITIAL',
	data:res.data
	};

}
export default loadMenu;