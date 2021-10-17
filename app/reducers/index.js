/*
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as loginReducer from './loginReducer';
import * as scoreReducer from './scoreReducer';
export default Object.assign(loginReducer, loadingReducer, scoreReducer);
