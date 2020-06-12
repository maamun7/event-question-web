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
import { signUpSubmit, processSubmit } from './actions';
import { getLoginSuccessRes } from './selectors';
import reducer from './reducer';
import saga from './saga';
import SignUp from './SignUp';

const mapDispatchToProps = (dispatch) => ({
	onSubmitSignUp: (signUpData) => {
		dispatch(signUpSubmit(signUpData));
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
const withReducer = injectReducer({ key: 'signUp', reducer });
const withSaga = injectSaga({ key: 'signUp', saga });

export default compose(withReducer, withSaga, withConnect)(SignUp);
export { mapDispatchToProps };
