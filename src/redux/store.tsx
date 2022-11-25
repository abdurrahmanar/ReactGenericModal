import { configureStore } from '@reduxjs/toolkit'

import popupReducer from '../components/popups/popupSlice';

 

const store = configureStore({

  reducer: popupReducer,

})

 

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

 

export default store