import React from 'react';

export class Configure extends React.PureComponent {
    componentDidMount() {
        this.props.configureSocket();
    }

    render() {
        return this.props.children;
    }
}
