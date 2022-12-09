import React, { useState, useEffect } from 'react'
import Button from './Button'
import '../css/header.css'
import { FaUserCircle, FaSearch } from 'react-icons/fa';
import Input from './Input';
import Login from '../api/Login';
import { useNavigate } from 'react-router-dom';
import { GenerateDisplayPicture, SearchUser } from '../api/Functions';
import { useDispatch, useSelector } from 'react-redux';
import { resetCommon, setCurrentView, setIsOnSearch, setSearchResult } from '../store/common/common';
import { resetUser } from '../store/user/userSlice';

export default function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const onLogOut = () => {
        localStorage.removeItem('listing-auth-token')
        dispatch(resetUser())
        dispatch(resetCommon())
        navigate('/sign-in', { replace: true })
    }
    const { loggedInUser } = useSelector(state => state.user.userSlice)
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {

        if (searchValue.trim() !== '') {
            dispatch(setIsOnSearch(true))
            dispatch(setCurrentView("Searching"))
            SearchUser(searchValue).then(resolve => {
                if (resolve.data.errors) {
                    dispatch(setSearchResult(false))
                }
                else {
                    dispatch(setSearchResult(resolve.data.data))
                }
            })
        }
        else {
            dispatch(setSearchResult(false))
            dispatch(setIsOnSearch(true))
            dispatch(setCurrentView("My Friends"))
        }
    }, [searchValue])
    return (
        <nav className='header-wrapper w-full flex items-center justify-center' style={{ height: 70 }}>
            <div className='w-11/12 flex items-center justify-between'>
                <h1 className='text-white' style={{ fontSize: 30, fontWeight: 900, }} >Listing Challenge</h1>
                <div className='flex items-center justify-center'>
                    <div className='flex items-center bg-white justify-center mr-10 pl-5' style={{ borderRadius: 10 }}>
                        <FaSearch color="gray" />
                        <input
                            style={{ border: 'none', outline: 'none' }}
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                            placeholder="Search User"
                        />
                        {/* <Input value={searchValue} onChange={() => (e) => setSearchValue(e.target.value)} type="text" id="search" placeholder="Search User" className="search-input ml-5" /> */}
                    </div>
                    <Button onClick={onLogOut} className="logout-btn mr-3 font-bold" >Logout</Button>
                    <div className='flex items-center justify-center'>
                        <img
                            style={{
                                width: 40,
                                height: 40,
                                borderRadius: '50%',
                                objectFit: 'cover',
                                marginRight: 10,
                                boxShadow: 'rgba(100, 100, 111, 0.5) 0px 7px 5px 0px'
                            }}
                            src={`img/others/${GenerateDisplayPicture()}`} />
                        <h5 className='text-white font-bold'>{loggedInUser.first_name} {loggedInUser.last_name}</h5>
                    </div>
                </div>
            </div>
        </nav>
    )
}
