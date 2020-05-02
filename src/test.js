import React, {Component} from 'react';

class TrafficLightTest extends Component{
    constructor(){
        super();
        this.state={
            LightRed:'on',
            LightYellow:'on',
            LightGreen:'on',
        }
    }
    render(){
        return(
            <div className='app'>
                <div className='bar'></div>
                <div className='trafficLight'>
                    <div className='lightRed' id={this.state.LightRed} onClick={this.setState({LightRed:'on',
            LightYellow:'off', LightGreen:'off'})}></div>
                    <div className='lightYellow' id={this.state.LightYellow} onClick={this.setState({LightRed:'off', LightYellow:'on', LightGreen:'off'})}></div>
                    <div className='lightGreen' id={this.state.LightGreen} onClick={this.setState({LightRed:'off',
            LightYellow:'off', LightGreen:'on'})}></div>
                </div>
            </div>
        )
    }
}
export default TrafficLightTest;