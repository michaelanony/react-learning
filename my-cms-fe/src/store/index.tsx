import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from './reducers/index'
import createSagaMiddleware from "redux-saga";
import {defsage} from './sagas'
const composeEnhancers = composeWithDevTools({});
const sagaMiddleware = createSagaMiddleware()
const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware)
)
const store = createStore(reducer, enhancer)
sagaMiddleware.run(defsage)
export type AppState = ReturnType<typeof reducer>;
export default store;
