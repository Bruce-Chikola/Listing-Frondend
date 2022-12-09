import React, { useEffect, useState } from 'react'
import Header from '../../shared/Header'
import Listing from './Listing'
import '../../css/user.css'
import '../../css/home.css'
import { LinkUserData, GetFriendsList, GetLoggedInUsser, GetUserList, GraphTest, AddNewFriend, GraphTest2, GraphTest3 } from '../../api/Functions'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setFriendIds, setFriendList, setLoggedInUser, setOthers, setUserList } from '../../store/user/userSlice'
import { setDataStatus } from '../../store/common/common'

export const UpdateData = () => {

}

export default function Home() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { userList, loggedInUser } = useSelector(state => state.user.userSlice)
    useEffect(() => {
        // if no csfr token is stored in the localocalstorage, redirect to sign in page
        if (!localStorage.getItem('listing-auth-token'))
            navigate('/sign-in', { replace: true })
        GetLoggedInUsser().then(resolve => {
            dispatch(setLoggedInUser(resolve.data))
            GetUserList().then(result => {
                dispatch(setUserList(result))
            })
        })
    }, [])

    // this effect is depended on the updates on both the userList and friendList
    useEffect(() => {
        LinkUserData(loggedInUser, userList).then(data => {
            if (data) {
                dispatch(setLoggedInUser(data.loggedInUser))
                dispatch(setOthers(data.others))
                dispatch(setDataStatus('mapped'))
            }
        })

    }, [userList])

    return (
        <div className='w-full h-full flex items-center justify-start flex-col'>
            <div className='top-deco absolute' ></div>
            <div className='bottom-deco absolute' ></div>

            <div className='home-wrapper w-4/5 h-full flex items-center justify-start flex-col'>
                <Header />
                <div className='w-11/12'>
                    <Listing />
                </div>
            </div>
        </div>
    )
}
