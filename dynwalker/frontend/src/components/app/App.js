import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { requestArea } from '../../redux/actions/area';
import { requestStats } from '../../redux/actions/stats';

class App extends PureComponent {
    componentDidMount() {
        this.props.requestArea();
        this.props.requestStats();
    }

    render() {
        return (
            <pre>
                {JSON.stringify(this.props.state, null, 2)}
            </pre>
        );
    }
}

const mapStateToProps = state => ({ state });

const mapDispatchToProps = {
    requestArea,
    requestStats
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
