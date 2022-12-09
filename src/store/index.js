import rootReducer from './rootReducer'
import { configureStore } from '@reduxjs/toolkit'
const store = configureStore({
	reducer: rootReducer(),
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			immutableCheck: false,
			serializableCheck: false,
		})
})

store.asyncReducers = {}

export const injectReducer = (key, reducer) => {
	store.asyncReducers[key] = reducer
	store.replaceReducer(rootReducer(store.asyncReducers))
	return store
}
export default store