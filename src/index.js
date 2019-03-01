import React from 'react'
import ReactDOM from 'react-dom'

class FormTest extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: "tom"}
    }

    handleSubmit= (e)=>{
        console.log(this.state.value);
        e.preventDefault();
    }

    handleChange = (e)=>{
        this.setState({
            value: e.target.value
        });
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                    {/*<input type="text"  value={this.state.value} onChange={this.handleChange}/>*/}
                    {/*<textarea value={this.state.value} onChange={this.handleChange}></textarea>*/}
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="pickachu">Pickachu</option>
                        <option value="tom">Tom</option>
                    </select>
                    <input type="submit" value="Go Ahead"/>
            </form>

        )
            }
}

ReactDOM.render(
    <FormTest/>,
    document.getElementById('root')
);