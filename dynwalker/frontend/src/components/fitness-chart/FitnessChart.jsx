import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { LineChart, Brush, Line, CartesianGrid, Legend, XAxis, YAxis, Tooltip } from 'recharts';

import './fitness-chart.css';

export default class FitnessChart extends PureComponent {
    static propTypes = {
        species: PropTypes.arrayOf(PropTypes.string).isRequired,
        fitness: PropTypes.arrayOf(PropTypes.object).isRequired
    };

    static colors = [
        '#82ca9d', '#dd2853', '#8884d8',
        '#ffff00', '#00ffff', '#ff00ff'
    ];

    render() {
        const data = this.prepareData();
        const startIndex = Math.max(0, data.length - 100);

        return (
            <div className="fitness-chart">
                <h2 className="fitness-chart__label">Функция приспособленности</h2>
                <LineChart data={data} width={600} height={400}>
                    <CartesianGrid vertical={false}/>
                    <XAxis dataKey="generation"/>
                    <YAxis domain={['dataMin', 'dataMax']}/>
                    <Tooltip/>
                    <Legend/>
                    {this.renderLines()}
                    <Brush startIndex={startIndex}>
                        <LineChart>
                            <CartesianGrid/>
                            <YAxis hide />
                            {this.renderLines()}
                        </LineChart>
                    </Brush>
                </LineChart>
            </div>
        );
    }

    renderLines() {
        return this.props.species.map((s, i) =>
            <Line
                key={s}
                dataKey={s}
                stroke={FitnessChart.colors[i]}
                dot={false}/>
        )
    }

    prepareData() {
        return this.props.fitness.map((item, generation) => ({
            ...item,
            generation
        }));
    }
}
