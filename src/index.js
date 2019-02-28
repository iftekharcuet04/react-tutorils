import React from 'react'
import ReactDOM from 'react-dom'


function ToonList(props) {
    const list = props.cartoons;
    return <ul>{
     list.map(((list,index)=><li key={index}>{list}</li>))
    }
    </ul>
}
const  cartoons = ['Pickachu','Aladdin','Tom','Tom'];

ReactDOM.render(
    <ToonList cartoons={cartoons}/>,
    document.getElementById('root')
);