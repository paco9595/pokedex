
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducer';
import { Sagas } from './sagas'
import { defaultState } from './defaultState'
const sagaMiddleware = createSagaMiddleware()

const initializeStore = initialState => {
    const store = createStore(
        rootReducer,
        defaultState,
        compose(applyMiddleware(sagaMiddleware))
    );
    sagaMiddleware.run(Sagas)
    return store
}
export default initializeStore