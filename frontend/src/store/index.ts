import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './slices/postsSlice'
import activeUserReducer from './slices/activeUserSlice'

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: activeUserReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
