import React from 'react'
import Badge from '../../shared/Badge'
import Button from '../../shared/Button'
import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux'
import { AddNewFriend, FindMutualFriends, GenerateDisplayPicture, GetFriendsList, GetLoggedInUsser, GetUserList } from '../../api/Functions'
import { setFriendIds, setLoggedInUser, setUserList } from '../../store/user/userSlice'
import { setDataStatus } from '../../store/common/common';
export default function AddUsers() {
    const dispatch = useDispatch()
    const { others } = useSelector(state => state.user.userSlice)
    const { loggedInUser, userList } = useSelector(state => state.user.userSlice)
    const { dataStatus } = useSelector(state => state.common)
    const onAddFriend = (id) => {
        alert("Please add friends from the django admin panel (Friends table)")
    }
    return (
        <div className='w-full py-5'>

            <table className='w-full table user-list-table mt-5'>
                <thead>
                    <tr>
                        <th></th>
                        <th>Username</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>User Email</th>
                        <th style={{ width: 200 }}>Status</th>
                        <th style={{ width: 180 }}>Mutual Friends</th>
                        <th style={{ width: 150 }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        others.length > 0 && dataStatus == 'mapped' ?
                            others.map((user, i) =>
                                <tr key={user.user.first_name + i + user.user.id}>
                                    <td>{i + 1}</td>
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
                                            {user.user.username}
                                        </div>
                                    </td>
                                    <td>{user.user.first_name}</td>
                                    <td>{user.user.last_name}</td>

                                    <td>{user.user.email}</td>
                                    <td><Badge>Active</Badge></td>
                                    <td>{FindMutualFriends(loggedInUser.friends, user.user.id, userList).length} Mutual Friends</td>
                                    <td>
                                        <Button onClick={() => onAddFriend(user.user.id)} style={{ height: 35, background: 'indigo' }}><small style={{ fontSize: 11 }} className="flex items-center justify-center"><FaPlus siz={25} className="mr-2" /> Add As Friend</small></Button>
                                    </td>
                                </tr>

                            )
                            :
                            <tr></tr>
                    }
                </tbody>
            </table>
        </div>
    )
}
