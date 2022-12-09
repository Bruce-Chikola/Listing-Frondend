import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentView } from '../../store/common/common'
import Clickable from '../../shared/Clickable'
import { FaUsers, FaUserPlus, FaUsersCog } from "react-icons/fa";
export default function SubMenus() {
    const dispatch = useDispatch()
    const { currentView } = useSelector(state => state.common)
    const onMenuClick = (view) => {
        dispatch(setCurrentView(view))
    }
    return (
        <div>
            <div className='w-full grid grid-cols-4'>
                <h2 className='w-full font-bold' style={{ fontSize: 20 }}>{currentView}</h2>
                <Clickable onClick={(e) => onMenuClick('My Friends')} title="My Friends"> <FaUsers size={20} className="mr-2" /> </Clickable>
                <Clickable onClick={(e) => onMenuClick('Add Friends')} title="Add Friends"><FaUserPlus size={20} className="mr-2" /> </Clickable>
                <Clickable onClick={(e) => onMenuClick('Add New User')} title="Add New User"><FaUsersCog size={20} className="mr-2" /> </Clickable>
            </div>
        </div>
    )
}
