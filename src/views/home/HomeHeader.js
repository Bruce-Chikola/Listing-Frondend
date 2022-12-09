import React from 'react'
import { FaGg } from 'react-icons/fa';
import Badge from '../../shared/Badge';
import Switcher from '../../shared/Switcher';
import { useSelector } from 'react-redux';
export default function HomeHeader() {
    const { userList, loggedInUser } = useSelector(state => state.user.userSlice)
    return (
        <div className='user-details w-full grid grid-cols-4 mb-2'>
            <div className='flex items-center justify-start w-full'>
                <div className='fagg flex items-center justify-center'>
                    <FaGg size={30} color="#732799" />
                </div>
                <div className='ml-3'>
                    <h2 className='text-color font-bold m-0'>{`${loggedInUser.first_name} ${loggedInUser.last_name}`}</h2>
                    <small className='text-gray-500'>{loggedInUser.email}</small>
                </div>
            </div>
            <div className='flex items-center jusify-center flex-col'>
                <h2>Total Users</h2>
                <Badge>{userList.length}</Badge>
            </div>
            <div className='flex items-center jusify-center flex-col'>
                <h2>My Friends</h2>
                <Badge>{loggedInUser.friends && loggedInUser.friends.length}</Badge>
            </div>
            <div className='flex items-center jusify-center flex-col'>
                <h2>Prefered Mode</h2>
                <Switcher />
            </div>
        </div>
    )
}
