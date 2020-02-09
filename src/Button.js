import React from 'react';

class Button extends React.Component {
    state = {
        status: 'IDLE', 
        countDown: this.props.duration
    }

    static defaultProps = {
        duration: 0
    }

    interval = undefined

    changeStatus = status => {
        this.setState(() => ({status: status}));
    }

    changeCountDown = value => {
        this.setState({countDown: value});
    }

    decrement = () => {
        this.changeCountDown(this.state.countDown - 1);
    }

    reset = () => {
        this.changeCountDown(this.props.duration);
    }

    run = () => {
        let me = this;

        this.interval = setInterval(function(){
            me.decrement();

            if(me.state.countDown === 0) {
                clearInterval(me.interval);
                me.changeStatus('DONE')
            } 
        }, 1000);
    }

    pause = () => {
        clearInterval(this.interval);
        this.changeStatus('PAUSED')
    }

    handleClick = () => {
        const {status} = this.state;       

        let nextStatus;
        if(this.props.duration) {
            if(status === 'RUNNING') {
                nextStatus = 'PAUSED';
                this.pause();
            } else if(status === 'DONE') {
                nextStatus = 'IDLE';
                this.reset();
            } else {
                nextStatus = 'RUNNING';
                this.run();
            } 
        } else {
            nextStatus = (status === 'IDLE') ? 'DONE' : 'IDLE';
        }

        this.changeStatus(nextStatus);
    }

    render() {

        
        return (
            <div>
                <p style={{display:(this.state.status !== 'RUNNING' && this.state.status !== 'PAUSED') && 'none'}}>{this.state.countDown}</p>
                <button onClick={this.handleClick}>{this.state.status}</button>
            </div>
        );
    }
}

export default Button;