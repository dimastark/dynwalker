import { connect } from 'react-redux';

import { requestArea } from '../../redux/actions/area';
import { requestStats } from '../../redux/actions/stats';

import StateInfoPage from './StateInfoPage';

const mapStateToProps = state => ({ state });

const mapDispatchToProps = dispatch => ({
    requestState() {
        dispatch(requestArea());
        dispatch(requestStats());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(StateInfoPage);
