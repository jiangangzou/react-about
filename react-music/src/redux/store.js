// 1 store 单一状态树 
 import { createStore } from 'redux';
 import reducer from './reducers';

 const store = createStore(reducer);
 export default store;