import { applyMiddleware, createStore } from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk'
const store = createStore(reducer, applyMiddleware(thunk));
const handleStateChange = () => {
    const currentState = store.getState();
    console.log('state updated', currentState);
}
store.subscribe(handleStateChange);
export default store;