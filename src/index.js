import React from 'react'
import ReactDOM from 'react-dom'


/*let name = 'Iftekhar1'
let obj = {
    fnane:'iftekharul',
    lname: 'islam'

}*/
//const element = <h1>hi {name} </h1>
let clock = function () {
    return <h1>{ new Date().toLocaleTimeString()}</h1>
}

setInterval(function () {
    ReactDOM.render(
        //<h1>hi {obj.fnane} {obj.lname}</h1>
        clock(),
        document.getElementById('root')
    );
},1000)

