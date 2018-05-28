import * as React from 'react';
// import FileUpload from '@material-ui/icons/FileUpload';
import FileImport from '@material-ui/icons/FileDownload';

import Button from './Button';

type Props = {
    value: string,
    handleClick: () => void,
    children? : object
}


class ExportButton extends React.PureComponent<Props> {
    render() {
        const { value, handleClick } = this.props;

        return (
            <Button value={value} handleClick={handleClick}>
                <FileImport style={{ paddingLeft: '5px', fontSize: '18px' }}/>
            </Button>
        );
    }
}

export default ExportButton;
