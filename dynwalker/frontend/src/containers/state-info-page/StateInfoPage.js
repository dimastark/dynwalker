import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class StateInfoPage extends PureComponent {
    static propTypes = {
        requestState: PropTypes.func,
        state: PropTypes.object
    };

    componentDidMount() {
        this.props.requestState();
    }

    render() {
        return (
            <pre>
                {JSON.stringify(this.props.state, null, 2)}
            </pre>
        );
    }
}
