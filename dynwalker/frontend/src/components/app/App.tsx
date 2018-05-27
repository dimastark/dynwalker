import * as React from 'react';

import Area from '../area';
import Stats from '../stats';
import Controls from "../controls";

export default class App extends React.PureComponent {
    public render() {
        return (
            <React.Fragment>
                <Controls/>
                <Area/>
                <Stats/>
            </React.Fragment>
        );
    }
}
