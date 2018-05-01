import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import FitnessChart from '../fitness-chart';

import './stats.css';

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
        const {description, isPending, populations} = this.props;

        if (isPending || !populations) {
            return null;
        }

        return (
            <div className="stats">
                <div className="stats__common">
                    <h2 className="common__header">Общая информация</h2>
                    <p>Описание модели: {description}</p>
                    <p>Текущее поколение: {populations.fitness.length}</p>
                    <p>Виды агентов: {`{${populations.species.join(', ')}}`}</p>
                </div>
                <FitnessChart {...this.props.populations} />
            </div>
        );
    }
}
