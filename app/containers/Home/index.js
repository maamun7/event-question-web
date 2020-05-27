import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
	getSelectApiResponse,
	getSelectApiError,
} from 'containers/App/selectors';
import { loadRepos } from '../App/actions';
import reducer from './reducer';
import saga from './saga';
import Home from './Home';

const mapDispatchToProps = (dispatch) => ({
	onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
	onSubmitForm: (evt) => {
		if (evt !== undefined && evt.preventDefault) evt.preventDefault();
		//dispatch(loadRepos());
	}
});

const mapStateToProps = createStructuredSelector({
	response: getSelectApiResponse(),
	error: getSelectApiError()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(withReducer, withSaga, withConnect)(Home);
export { mapDispatchToProps };
