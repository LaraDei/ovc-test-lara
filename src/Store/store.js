import { configureStore } from '@reduxjs/toolkit';
import userReducer from './usersSlice';
import postsReducer from './postsSlice'

function saveToLocalStorage(state){
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  }catch(e){
    console.log(e)
  }
}
function loadFromLocalStorage(){
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  }catch(e){
    console.log(e)
    return undefined
  }
}
const persistedState = loadFromLocalStorage()

const rootReducer = { users: userReducer, posts: postsReducer}
export const store = configureStore({
  reducer: rootReducer,
  persistedState
});

store.subscribe(()=> saveToLocalStorage(store.getState()))