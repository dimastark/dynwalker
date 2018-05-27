import * as React from 'react';
import { connect } from 'react-redux';

import { playGame, stopGame, setPopulation } from '../../redux/actions/game';
import Button from '../button';
import TextField from '../textField';
import populationIsNotError from '../../utils/isIntegerNumber';

import './controls.css';
import { RootState } from "../../redux/reducers";
import { GameState } from "../../redux/reducers/game";

type StateFromProps = GameState;

type DispatchFromProps = {
    playGame: Function,
    stopGame: Function,
    setPopulation: Function
}


type Props = StateFromProps & DispatchFromProps;

class Controls extends React.PureComponent<Props> {
    state = {
        isErrorPopulation: true
    };

    render() {

        const { population } = this.props;
        const { isErrorPopulation } = this.state;
        console.log(`population: ${population}`);

        return (
            <div className="controls">
                <div className="controls__block">
                    <div className="controls__block_item">
                        <Button value="Старт" handleClick={this.handleClickStart}/>
                    </div>
                    <div className="controls__block_item">
                        <Button value="Стоп" handleClick={this.handleClickStop}/>
                    </div>
                </div>
                <div className="controls__block">
                    <div className="controls__block_item">
                        <Button value="Эволюция" handleClick={this.handleClickStart}/>
                    </div>
                    <div className="controls__block_item">
                        <TextField
                            value={population}
                            handleChange={this.handleChangePopulation}
                            placeholder="population"
                            error={isErrorPopulation}
                        />
                    </div>
                </div>
                <div className="controls__block">
                    <div className="controls__block_item">
                        <Button value="Импорт мозга" handleClick={this.handleClickStart}/>
                    </div>
                    <div className="controls__block_item">
                        <Button value="Экспорт мозга" handleClick={this.handleClickStart}/>
                    </div>
                </div>
            </div>
        );
    }

    handleClickStart = () => {
        this.props.playGame();
    };

    handleClickStop = () => {
        this.props.stopGame();
    };

    handleChangePopulation = (value: string) => {
        const isValid = populationIsNotError(value, 1000, 1);
        this.setState({ ...this.state, isErrorPopulation: !isValid });
        this.props.setPopulation(value);
    };
}

const mapStateToProps = (state: RootState) => ({
    ...state.game
});

const mapDispatchToProps = {
    playGame,
    stopGame,
    setPopulation
};

export default connect<StateFromProps, DispatchFromProps>(mapStateToProps, mapDispatchToProps)(Controls);
