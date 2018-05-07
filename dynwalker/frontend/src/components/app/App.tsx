import * as React from 'react';

import Area from '../area';
import Stats from '../stats';

export default class App extends React.PureComponent {
    public render() {
        return (
            <React.Fragment>
                <Area/>
                <Stats/>
            </React.Fragment>
        );
    }
}
