import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    userList: {
        data: []
    },
    friendIds: [],
    others: [],
    mutualFriends: [],
    loggedInUser: {
        id: 0,
        first_name: '',
        last_name: '',
        email: '',
        friends: []
    },
}
export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUserList: (state, action) => {
            state.userList = action.payload
        },
        setFriendIds: (state, action) => {
            state.friendIds = action.payload
        },
        setOthers: (state, action) => {
            state.others = action.payload
        },
        setMutualFriends: (state, action) => {
            state.mutualFriends = action.payload
        },
        setLoggedInUser: (state, action) => {
            state.loggedInUser = action.payload
        },
        resetUser: (state, action) => {
            state = {
                userList: {
                    data: []
                },
                friendIds: [],
                others: [],
                mutualFriends: [],
                loggedInUser: {
                    id: 0,
                    first_name: '',
                    last_name: '',
                    email: '',
                    friends: []
                }
            }
        }
    }
})
export const {
    setUserList,
    setLoggedInUser,
    setFriendIds,
    setOthers,
    setMutualFriends,
    resetUser
} = userSlice.actions

export default userSlice.reducer