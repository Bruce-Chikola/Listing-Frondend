import { combineReducers } from 'redux'
import user from './user'
import common from './common/common'
const rootReducer = () => (state, action) => {
    const combinedReducer = combineReducers({ user, common })
    return combinedReducer(state, action)
}

export default rootReducer
