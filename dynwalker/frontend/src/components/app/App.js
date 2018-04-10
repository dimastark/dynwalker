import React, { PureComponent } from 'react';

export default class App extends PureComponent {
    render() {
        return (
            <div>{process.env.REACT_APP_SERVER_HOST}</div>
        );
    }
}
