import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth5005Reducer from '../features/EmailAuth5005/redux/reducers';
import EmailAuth5001Reducer from '../features/EmailAuth5001/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth5005: EmailAuth5005Reducer,
EmailAuth5001: EmailAuth5001Reducer,
EmailAuth: EmailAuthReducer,

});