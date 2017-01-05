import React, {Component} from 'React';


class Country extends Component {
    render(){
        console.log('render...........');
        
    var toRender = (
            <div> 

            </div>
        
        
        
        )
    return toRender;
        
        
    }
    
    
    constructor(props){
        super();
        console.log('constructor.........'+ props);
    }
    componentWillMount(){
    console.log('componentWillMount...........');
    }
    componentDidMount(){
        console.log('componentDidMount..............');
    }
}



export default Country;

