import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    currentView: 'My Friends',
    dataStatus: 'unmapped',
    isOnSearch: false,
    searchResult: {}
}
export const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        setCurrentView: (state, action) => {
            state.currentView = action.payload
        },
        setDataStatus: (state, action) => {
            state.dataStatus = action.payload
        },
        setIsOnSearch: (state, action) => {
            state.isOnSearch = action.payload
        },
        setSearchResult: (state, action) => {
            state.searchResult = action.payload
        },
        resetCommon: (state, action) => {
            state = {
                currentView: 'My Friends',
                dataStatus: 'unmapped',
                isOnSearch: false,
                searchResult: {}
            }
        }
    }
})
export const {
    setCurrentView,
    setDataStatus,
    setIsOnSearch,
    setSearchResult,
    resetCommon
} = commonSlice.actions

export default commonSlice.reducer