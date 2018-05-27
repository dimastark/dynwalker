import * as React from 'react';

import Button from '../button';
import TextField from '../textField';

import './controls.css';

type Props = {

};

class Controls extends React.PureComponent<Props> {
    render() {
        return (
            <div className="controls">
                <div className="controls__block">
                    <div className="controls__block_item"><Button value="Старт"/></div>
                    <div className="controls__block_item"><Button value="Стоп"/></div>
                </div>
                <div className="controls__block">
                    <div className="controls__block_item"><Button value="Эволюция"/></div>
                    <div className="controls__block_item">
                        <TextField
                            value=""
                            handleChange={this.handleChangeGeneration}
                            placeholder="population"
                        />
                    </div>
                </div>
                <div className="controls__block">
                    <div className="controls__block_item"><Button value="Импорт мозга"/></div>
                    <div className="controls__block_item"><Button value="Экспорт мозга"/></div>
                </div>
            </div>
        );
    }

    handleChangeGeneration = () => {

    }
}

export default Controls;
