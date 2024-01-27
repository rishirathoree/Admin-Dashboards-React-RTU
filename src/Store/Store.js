import { configureStore } from '@reduxjs/toolkit'
import { AppSlicer } from './Slices/Index';

const store = configureStore({
  reducer: {
    // add reducers
    App:AppSlicer
  },
})

export default store;