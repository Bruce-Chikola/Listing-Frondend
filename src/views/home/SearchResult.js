import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { FindMutualFriends, GenerateDisplayPicture } from '../../api/Functions'
import Badge from '../../shared/Badge'
export default function SearchResult() {
    const { loggedInUser, userList } = useSelector(state => state.user.userSlice)
    const { searchResult } = useSelector(state => state.common)
    return (
        <div className='w-full'>
            <h4>Search Results</h4>
            {
                searchResult && Object.keys(searchResult).length > 0 &&
                < div >
                    < table className='w-full table friend-list-table mt-5'>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Username</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>User Email</th>
                                <th>Status</th>
                                <td>Mutual Friends</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr key="dkjnwdiuygueg3i2h23ehievuei23ueh2i3">
                                <td></td>
                                <td>
                                    <div className='flex items-center justify-start'>
                                        <img
                                            src={`img/others/${GenerateDisplayPicture()}`}
                                            style={{
                                                width: 40,
                                                height: 40,
                                                objectFit: 'cover',
                                                objectPosition: 'center',
                                                borderRadius: '50%',
                                                marginRight: 10,
                                                boxShadow: 'rgba(100, 100, 111, 0.3) 0px 7px 5px 0px'
                                            }}
                                        />
                                        {searchResult.userByEmail.username}
                                    </div>
                                </td>
                                <td>{searchResult.userByEmail.firstName}</td>
                                <td>{searchResult.userByEmail.lastName}</td>

                                <td>{searchResult.userByEmail.email}</td>
                                <td><Badge>Active</Badge></td>
                                <td>{FindMutualFriends(loggedInUser.friends, searchResult.userByEmail.id, userList).length} Mutual Friends</td>

                            </tr>

                        </tbody>
                    </table>
                </div>
            }
            {
                !searchResult &&
                <div className="w-full flex items-center justify-center text-red-500 font-bold" style={{ height: 300 }}>No no matching results found</div>
            }
        </div >
    )
}
