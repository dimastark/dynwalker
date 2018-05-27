import * as React from 'react';
// import { connect } from 'react-redux';
import ButtonUI from '@material-ui/core/Button';

type Props = {
    value: string,
    handleClick: () => void
}


class Button extends React.PureComponent<Props> {
    render() {
        const { value } = this.props;

        return (
            <ButtonUI variant="raised" color="default" size="small" onClick={this.handleClick}>
                {value || ''}
            </ButtonUI>
        );
    }

    handleClick = () => {
        this.props.handleClick();
    }
}

export default Button;
