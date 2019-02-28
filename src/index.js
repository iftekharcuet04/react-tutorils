import React from 'react'
import ReactDOM from 'react-dom'


/*let name = 'Iftekhar1'
let obj = {
    fnane:'iftekharul',
    lname: 'islam'

}*/

/*function Cartoon(props) {
    return <h1>Hello , {props.name} , {props.show}</h1>
}


function Show() {
   return <div> <Cartoon name="pickachu" show="pokemon"/>
    <Cartoon name="jasemin" show="aladin"/>
         </div>
}*/

/*
 class Cartoon extends React.Component{

 render(){
 return <h1>Hi , {this.props.name} </h1>
 }
 }
 */

/*function  Clock() {
    return <h1> This time this :- {new Date().toLocaleTimeString()}</h1>
}*/

class Clock extends React.Component{

    constructor(props){

        super(props);
        this.state={

            date : new Date()
        }
    }

    componentDidMount(){
        this.timer = setInterval(()=>this.start(),1000);
    }

    componentWillUnmomunt(){
        clearInterval(this.timer);
    }

    start(){
        this.setState({

            date: new Date()
        });
    }
    render(){
        return <h1> This time this :- {this.state.date.toLocaleTimeString()}</h1>
    }
}


/*
function time() {
    ReactDOM.render(
        //<Cartoon name="pickachu"/>,

        // <Show/>,

        <Clock/>,
        document.getElementById('root')
    );
}
setInterval(time(),1000);
*/

ReactDOM.render(
    //<Cartoon name="pickachu"/>,

    // <Show/>,

    <Clock/>,
    document.getElementById('root')
);

