import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
	getSelectIsLoading,
	getSelectApiResponse,
	getSelectApiError
} from 'containers/App/selectors';
import { startLoader, stopLoader } from '../App/actions';
import { loginSubmit, processSubmit } from './actions';
import { getLoginSuccessRes } from './selectors';
import reducer from './reducer';
import saga from './saga';
import Login from './Login';

const mapDispatchToProps = (dispatch) => ({
	onSubmitLogin: (loginData) => {
		dispatch(loginSubmit(loginData));
		dispatch(processSubmit());
		dispatch(startLoader());
	}
});

const mapStateToProps = createStructuredSelector({
	isLoading: getSelectIsLoading(),
	response: getSelectApiResponse(),
	error: getSelectApiError()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'login', reducer });
const withSaga = injectSaga({ key: 'login', saga });

export default compose(withReducer, withSaga, withConnect)(Login);
export { mapDispatchToProps };
