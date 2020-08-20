import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// import reducers from './reducers/index';

// const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

// export default store;
import rootReducer from './reducers/app-state.reducer.js'




let store = createStore( rootReducer, 0, applyMiddleware(thunk) );
export default store;