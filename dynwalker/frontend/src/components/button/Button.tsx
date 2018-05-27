import * as React from 'react';
// import { connect } from 'react-redux';
import ButtonUI from '@material-ui/core/Button';

type Props = {
    value: string
}

class Button extends React.PureComponent<Props> {
    render() {
        const { value } = this.props;

        return (
            <ButtonUI variant="raised" color="default" size="small">
                {value || ''}
            </ButtonUI>
        );
    }
}

export default Button;
