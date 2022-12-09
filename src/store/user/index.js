import { combineReducers } from '@reduxjs/toolkit'
import userSlice from './userSlice'
const reducer = combineReducers({ userSlice })

export default reducer