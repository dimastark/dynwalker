import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FitnessChart from '../fitness-chart';

export default class Stats extends PureComponent {
    static propTypes = {
        requestStats: PropTypes.func.isRequired,
        isPending: PropTypes.bool.isRequired,
        description: PropTypes.string,
        populations: PropTypes.shape({
            species: PropTypes.arrayOf(PropTypes.string).isRequired,
            fitness: PropTypes.arrayOf(PropTypes.object).isRequired
        })
    };

    static defaultProps = {
        description: '',
        populations: null
    };

    componentDidMount() {
        this.props.requestStats();
    }

    render() {
        console.log(this.props);

        if (!this.props.isPending && this.props.populations) {
            return (
                <FitnessChart {...this.props.populations} />
            );
        }

        return null;
    }
}
