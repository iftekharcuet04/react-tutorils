import React from 'react'
import ReactDOM from 'react-dom'

class Calculator extends  React.Component{
    constructor(props) {
        super(props);
        this.state = {
            scale: 'c', temp: '0'
        }
    }

    handleCelciusChange = (e) =>{

        this.setState({
            scale:'c',temp:e.target.value
        })

    }

    handleFarenhiteChange = (e) =>{

        this.setState({
            scale:'f',temp:e.target.value
        })

    }
        render(){
            const temp=this.state.temp
            const scale=this.state.scale
            const celcius= scale ==='f' ? (temp-32)*5/9 : temp
            const farenhite=scale ==='c' ? (temp*9)/5 +32 : temp
            return(

                <div>
                    <fieldset>
                    <legend>
                        Sale Celcius
                    </legend>

                    <input value={celcius} onChange={this.handleCelciusChange}/>
                </fieldset>

                <fieldset>
                    <legend>
                        Sale Farenhite
                    </legend>

                    <input value={farenhite} onChange={this.handleFarenhiteChange}/>
                </fieldset>
                </div>
            );
        }

}
ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
);