import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import subscriptionReducer from "./subscription/reducer";
import searchReducer from "./search/reducer";
import filterReducer from "./filter/reducer";
import progressReducer from "./progress/reducer";

const reducer = combineReducers({
  subscription: subscriptionReducer,
  search: searchReducer,
  filter: filterReducer,
  progress: progressReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
