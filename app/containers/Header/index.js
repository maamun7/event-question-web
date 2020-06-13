import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Header from './Header';
import { getSelectHasToken, getSelectToken } from 'containers/App/selectors';
import { updateToken, stopLoader } from '../App/actions';
import { clearToken } from '../../utils/localstorage'


const mapDispatchToProps = (dispatch) => ({
	onLogout: () => {
		clearToken();
		dispatch(updateToken({ authToken: false}));
	}
});

export default connect(
	createStructuredSelector({
		hasToken: getSelectHasToken(),
		tokenData: getSelectToken()
	}), mapDispatchToProps
)(Header);

export { mapDispatchToProps };
