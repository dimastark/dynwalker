import * as React from 'react';
import { connect } from 'react-redux';

import { requestArea } from 'src/redux/actions/area';
import { RootState } from 'src/redux/reducers';
import { AreaState } from 'src/redux/reducers/area';

type StateFromProps = AreaState;

type DispatchFromProps = {
    requestArea: Function
};

type Props = StateFromProps & DispatchFromProps;

class Area extends React.PureComponent<Props> {
    componentDidMount() {
        this.props.requestArea();
    }

    render() {
        const { isPending } = this.props;

        if (isPending) {
            return null;
        }

        return (
            <div className="area">
                <pre>
                    {JSON.stringify(this.props, null, 2)}
                </pre>
            </div>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    ...state.area
});

const mapDispatchToProps = {
    requestArea
};

export default connect<StateFromProps, DispatchFromProps>(mapStateToProps, mapDispatchToProps)(Area);
