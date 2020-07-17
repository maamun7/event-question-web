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
import { loadEventList } from './actions';
import { getSelectEventList } from './selectors';
import reducer from './reducer';
import saga from './saga';
import Event from './Event';

const mapDispatchToProps = (dispatch) => ({
	onSubmitSignUp: (signUpData) => {
	//	dispatch(signUpSubmit(signUpData));
	//	dispatch(processSubmit());
		dispatch(startLoader());
	},
	onLoadEventList: () => {
		dispatch(loadEventList())
	}
});

const mapStateToProps = createStructuredSelector({
	isLoading: getSelectIsLoading(),
	error: getSelectApiError(),
	eventList: getSelectEventList()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'event', reducer });
const withSaga = injectSaga({ key: 'event', saga });

export default compose(withReducer, withSaga, withConnect)(Event);
export { mapDispatchToProps };
