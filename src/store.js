
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducer';
import { Sagas } from './sagas'

const sagaMiddleware = createSagaMiddleware()

export default function configureStore() {
    return createStore(
        rootReducer,
        applyMiddleware(sagaMiddleware)
    );
}

sagaMiddleware.run(Sagas)