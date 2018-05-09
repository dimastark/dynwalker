import * as React from 'react';
import { LineChart, Brush, Line, CartesianGrid, Legend, XAxis, YAxis, Tooltip } from 'recharts';

import { Species } from '../../redux/services/api/area';

import './fitness-chart.css';

interface Props {
    species: Species[],
    fitness: { [species in Species]: number }[]
}

export default class FitnessChart extends React.PureComponent<Props> {
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
                            <YAxis hide={true}/>
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
