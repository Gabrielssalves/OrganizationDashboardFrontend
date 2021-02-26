import './Counter.css'
import React, {Component} from 'react'

import Display from './Display'
import Buttons from './Buttons'
import Step from './Step'

export default class Counter extends React.Component {

    state = {
        step: this.props.step || 1,
        value: this.props.value || 0
    }

    inc = () => {
        this.setState({
            value: this.state.value + this.state.step
        })
    }

    dec = () => {
        this.setState({
            value: this.state.value - this.state.step
        })
    }

    changeStep = (newStep) => {
        this.setState({
            step: newStep
        })
    }

    render() {
        return (
            <div className="Counter">
                <h2>Counter</h2>
                <Step step={this.state.step} onStepChange={this.changeStep}></Step>
                <Display value={this.state.value}></Display>    
                <Buttons onInc={this.inc} onDec={this.dec}></Buttons>                    
            </div>
        )
    }
}