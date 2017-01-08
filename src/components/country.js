import React, {Component} from 'React';
/**<input type="text" defaultValue={this.state.name} onChange={(e)=>{
                   console.log('Change state');
                   console.log('printing this inside thefunction');
                   console.log(this);
                   this.setState({name: e.target.value});
                }}
              -->
              **/
/**
**/

class Country extends Component {
  render(){
        console.log('render...........');
        console.log(this);
        console.log(this.state);
        console.log();
        var toRender = (
            <div>
              <input type="text" defaultValue={this.state.name} onChange={this.change.bind(this)}>
              </input>
              <h1>Hello, {this.state.name}</h1>
            </div>


        )

    return toRender;
    };

    /**
    * Change event
    */
    change(event){
           console.log('============change');
           console.log(this);
           this.setState({name: event.target.value});
       }



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
