import React from 'react'
import ReactDOM from 'react-dom'


/*let name = 'Iftekhar1'
let obj = {
    fnane:'iftekharul',
    lname: 'islam'

}*/

function Cartoon(props) {
    return <h1>Hello , {props.name} , {props.show}</h1>
}


function Show() {
   return <div> <Cartoon name="pickachu" show="pokemon"/>
    <Cartoon name="jasemin" show="aladin"/>
         </div>
}
/*
class Cartoon extends React.Component{

    render(){
        return <h1>Hi , {this.props.name} </h1>
    }
}
*/

setInterval(function () {
    ReactDOM.render(
        //<Cartoon name="pickachu"/>,

        <Show/>,
        document.getElementById('root')
    );
},1000)

