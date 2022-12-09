import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import AddUsers from './AddUsers';
import Friends from './Friends';
import HomeHeader from './HomeHeader';
import MutualFriends from './MutualFriends';
import SearchResult from './SearchResult';
import SubMenus from './SubMenus';
export default function Listing() {
    const { currentView } = useSelector(state => state.common)
    return (
        <div className='w-full flex flex-col gap-5 mt-10'>
            <HomeHeader />
            <SubMenus />
            {currentView === 'My Friends' && <Friends />}
            {currentView === 'Add Friends' && <AddUsers />}
            {currentView === 'Mutual Friends' && <MutualFriends />}
            {currentView === 'Searching' && <SearchResult />}
        </div>
    )
}
