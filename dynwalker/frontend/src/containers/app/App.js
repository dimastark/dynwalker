import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';

import StateInfoPage from '../state-info-page';

export default class App extends PureComponent {
    render() {
        return (
            <Switch>
                <Route path="/state" component={StateInfoPage} />
            </Switch>
        );
    }
}
