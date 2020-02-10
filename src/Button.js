import React from 'react';

class Button extends React.Component {
    state = {
        status: this.props.status.IDLE,
        countDown: this.props.duration
    }

    static defaultProps = {
        duration: 0,
        status: {
            'IDLE': 'idle',
            'RUNNING': 'running',
            'PAUSED': 'paused',
            'DONE': 'done'
        }
    }

    interval = undefined

    // Function to update the component status
    changeStatus = status => {
        this.setState(() => ({ status: status }));
    }

    // Function to update countdown
    changeCountDown = value => {
        this.setState({ countDown: value });
    }

    // Function to decrement countdown 
    decrement = () => {
        this.changeCountDown(this.state.countDown - 1);
    }

    // Function to start countdown
    run = () => {
        let me = this;

        // Calls decrement every 1 second
        // If the duration is actually in minutes the second parameter should be 60000
        this.interval = setInterval(function () {
            me.decrement();

            // Stops countdown once it reaches 0 and update component status
            if (me.state.countDown === 0) {
                clearInterval(me.interval);
                me.changeStatus(me.props.status.DONE)
            }
        }, 1000);
    }

    // Function to pause the countdown
    pause = () => {
        clearInterval(this.interval);
        this.changeStatus(this.props.status.PAUSED)
    }

    handleClick = () => {
        const { status } = this.state;

        // Not allowing changing from DONE
        if (status === this.props.status.DONE) {
            return;
        }

        // Verifies whether it has add property if also checks if previous ingredients have beem marked done
        if (this.props.add && this.props.checkPreviousItems(this.props.id)) {
            alert('Please add previous ingredients.')
            return;
        }

        // Assumes the butoon is going to change to done...
        let nextStatus = this.props.status.DONE;

        // But if has a duration...
        if (this.props.duration) {
            // If it's running will change to paused...
            if (status === this.props.status.RUNNING) {
                nextStatus = this.props.status.PAUSED;
                // and countdown is also paused
                this.pause();
            // Otherwise it changes to running and starts countdown
            } else {
                nextStatus = this.props.status.RUNNING;
                this.run();
            }
        }

        this.changeStatus(nextStatus);
    }

    render() {
        return (
            <div>
                <button className={this.state.status} onClick={this.handleClick}>{this.state.status.toUpperCase()}</button>
                <p className='countdown' align='right' style={{ visibility: (this.state.status === this.props.status.RUNNING || this.state.status === this.props.status.PAUSED) ? 'visible' : 'hidden' }}>{this.state.countDown}</p>
            </div>
        );
    }
}

export default Button;