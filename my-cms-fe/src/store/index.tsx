import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from './reducers/index'
import thunk from "redux-thunk";
const composeEnhancers = composeWithDevTools({});

const enhancer = composeEnhancers(
    applyMiddleware(thunk)
)
const store = createStore(reducer, enhancer)
export type AppState = ReturnType<typeof reducer>;
export default store;