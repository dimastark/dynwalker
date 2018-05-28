import * as React from 'react';
import ButtonUI from '@material-ui/core/Button';

type Props = {
    value: string,
    handleClick: () => void,
    children? : object
}


class Button extends React.PureComponent<Props> {
    render() {
        const { value, children } = this.props;

        return (
            <ButtonUI variant="raised" color="default" size="small" onClick={this.handleClick}>
                {value || ''}
                {children || ''}
            </ButtonUI>
        );
    }

    handleClick = () => {
        this.props.handleClick();
    }
}

export default Button;
