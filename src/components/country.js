import React, {Component} from 'React';

class Country extends Component {

    
   change(event){
        console.log('============change');
       console.log(this);
   }
    
  render(){
        console.log('render...........');
        console.log(this);
        console.log(this.state);
        console.log();
    var toRender = (
        <div>
        <input type="text" defaultValue={this.state.name} onChange={(e)=>{
             console.log('Change state');
             console.log('printing this inside thefunction');
             console.log(this);
             this.setState({name: e.target.value});
        }}/>

        <input type="tex1t" defaultValue={this.state.name} onChange={this.change.bind(this)}
                />  
            <br/>
            Hello, {this.state.name}
            </div>

        )

    return toRender;
    };

  



    constructor(props){
        super();
        this.state = {name:'World' }
        console.log('=============');
        console.log( this);
        console.log('@@@@@@@@@@@');
        console.log(props);
        console.log('******************');
        console.log(this.state);
    }
    componentWillMount(){
    console.log('componentWillMount...........');
    }
    componentDidMount(){
        console.log('componentDidMount..............');
    }
}



export default Country;
