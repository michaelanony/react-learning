import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from './reducers/index'
import createSagaMiddleware from "redux-saga";
import { defSaga } from './sagas/index'
const composeEnhancers = composeWithDevTools({});
const sagaMiddleware = createSagaMiddleware()
const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware)
)
const store = createStore(reducer, enhancer)
sagaMiddleware.run(defSaga)
export type AppState = ReturnType<typeof reducer>;
export default store;
