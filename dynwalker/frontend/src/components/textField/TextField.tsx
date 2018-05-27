import * as React from 'react';
import TextFieldUI from '@material-ui/core/TextField';

type Props = {
    value: string,
    placeholder? : string;
    error?: boolean,
    // type? : string,
    handleChange: (value: string) => void;
}

class TextField extends React.PureComponent<Props> {
    render() {
        const { value, placeholder, error } = this.props;


        return (
            <TextFieldUI
                placeholder={placeholder || ''}
                value={value || ''}
                onChange={this.handleChange}
                margin="normal"
                style={{ marginTop: 0, marginBottom: -16 }}
                error={error || false}
            />
        );
    }

    handleChange = (event: any) => {
        this.props.handleChange(event.target.value);
    }
}

export default TextField;
