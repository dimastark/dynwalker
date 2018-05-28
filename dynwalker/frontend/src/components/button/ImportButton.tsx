import * as React from 'react';
import FileExport from '@material-ui/icons/FileUpload';


import Button from './Button';

type Props = {
    value: string,
    handleClick: () => void,
    children? : object
}


class ImportButton extends React.PureComponent<Props> {
    render() {
        const { value, handleClick } = this.props;

        return (
            <Button value={value} handleClick={handleClick}>
                <FileExport style={{ paddingLeft: '5px', fontSize: '18px' }}/>
            </Button>
        );
    }
}

export default ImportButton;
