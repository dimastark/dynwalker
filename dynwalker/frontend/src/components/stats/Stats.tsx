import * as React from 'react';
import { connect } from 'react-redux';

import { requestStats } from '../../redux/actions/stats';
import { RootState } from '../../redux/reducers';
import { StatsState } from '../../redux/reducers/stats';
import FitnessChart from '../fitness-chart';

import './stats.css';

type StateFromProps = StatsState;

type DispatchFromProps = {
    requestStats: Function
};

type Props = StateFromProps & DispatchFromProps;

class Stats extends React.PureComponent<Props> {
    componentDidMount() {
        this.props.requestStats();
    }

    render() {
        const { description, isPending, populations } = this.props;

        if (isPending || !description) {
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

const mapStateToProps = (state: RootState) => ({
    ...state.stats
});

const mapDispatchToProps = {
    requestStats
};

export default connect<StateFromProps, DispatchFromProps>(mapStateToProps, mapDispatchToProps)(Stats);
