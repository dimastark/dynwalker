import * as React from 'react';
import { connect } from 'react-redux';

import { playGame, stopGame, setPopulation, evolve, exportBrain, importBrain } from '../../redux/actions/game';
import Button from '../button';
import ExportButton from '../button/ExportButton';
import ImportButton from '../button/ImportButton';
import TextField from '../textField';

import './controls.css';
import { RootState } from "../../redux/reducers";
import { GameState } from "../../redux/reducers/game";

type StateFromProps = GameState;

type DispatchFromProps = {
    playGame: Function,
    stopGame: Function,
    setPopulation: Function,
    evolve: Function,
    exportBrain: Function,
    importBrain : Function,
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
                        <Button value="Эволюция" handleClick={this.handleClickEvolve}/>
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
                    <div className="controls__block_item controls__upload-btn-wrapper">
                        <ImportButton value="Импорт мозга" handleClick={this.handleClickImport}/>
                        <input name="myFile" type="file"/>
                    </div>
                    <div className="controls__block_item">
                        <ExportButton value="Экспорт мозга" handleClick={this.handleClickExport}/>
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

    isValidPopulation = (valueString: string) => {
        const valueIsNatural = /^\+?(0|[1-9]\d*)$/.test(valueString);
        const valueInt = parseInt(valueString);

        return valueIsNatural && valueInt <= 1000 && valueInt >= 1;
    };

    handleChangePopulation = (value: string) => {
        const isValid = this.isValidPopulation(value);
        this.setState({ ...this.state, isErrorPopulation: !isValid });
        this.props.setPopulation(value);
    };

    handleClickEvolve = () => {
        const { population } = this.props;

        if (this.isValidPopulation(population)) {
            this.props.evolve(parseInt(population));
        }

    };

    handleClickImport = () => {
        this.props.importBrain();
    };

    handleClickExport = () => {
        this.props.exportBrain();
    };
}

const mapStateToProps = (state: RootState) => ({
    ...state.game
});

const mapDispatchToProps = {
    playGame,
    stopGame,
    setPopulation,
    evolve,
    exportBrain,
    importBrain,
};

export default connect<StateFromProps, DispatchFromProps>(mapStateToProps, mapDispatchToProps)(Controls);
