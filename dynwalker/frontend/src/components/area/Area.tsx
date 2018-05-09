import * as React from 'react';
import { connect } from 'react-redux';
import { Layer, Stage } from 'react-konva';

import { requestArea } from 'src/redux/actions/area';
import { RootState } from 'src/redux/reducers';
import { AreaState } from 'src/redux/reducers/area';
import Obstacle from '../obstacle';

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

        const { size, statics, dynamics } = this.props;
        const scale = window.innerWidth / size.width;
        const style = { border: '1px solid black' };

        return (
            <Stage
                width={size.width * scale}
                height={size.height * scale}
                style={style}>
                <Layer>
                    {statics.map((s, i) => (
                        <Obstacle key={i} scale={scale} {...s}/>
                    ))}
                    {Object.values(dynamics.byId).map(({id, ...s}) => (
                        <Obstacle key={id} scale={scale} text={s.type} {...s}/>
                    ))}
                </Layer>
            </Stage>
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
