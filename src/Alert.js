import React, { Component } from 'react';

class Alert extends Component {
    constructor(props) {
        super(props);
        this.color = null;
    }

    getStyle = () => {
        return {
            color: this.color
        };
    }

    render() {
        return (
            <div className='Alert' id="infoAlert">
                <p style={this.getStyle()}>{this.props.text}</p>
            </div>
        );
    }
}

class InfoAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = '#FF00F5';
    }
}

class ErrorAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = '#FF00F5';
    }
}

export { InfoAlert };
export { ErrorAlert };