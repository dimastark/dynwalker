import { connect } from 'react-redux';

import { requestStats } from '../../redux/actions/stats';

import Stats from './Stats';

const mapStateToProps = state => ({
    ...state.stats
});

const mapDispatchToProps = {
    requestStats
};

export default connect(mapStateToProps, mapDispatchToProps)(Stats);
