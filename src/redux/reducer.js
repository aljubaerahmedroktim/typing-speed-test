import { combineReducers } from 'redux';
import nameReducer from './name/nameReducer';
import resultReducer from './result/resultReducer';

const reducer = combineReducers({nameReducer, resultReducer});
export default reducer;