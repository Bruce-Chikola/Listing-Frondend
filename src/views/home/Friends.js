import React from 'react'
import Badge from '../../shared/Badge'
import Button from '../../shared/Button'
import { useDispatch, useSelector } from 'react-redux'
import { FindMutualFriends, Unfriend } from '../../api/Functions'
import { GetFriendsList, GetLoggedInUsser, GetUserList } from '../../api/Functions'
import { setFriendIds, setLoggedInUser, setMutualFriends, setUserList } from '../../store/user/userSlice'
import { FaSadTear } from 'react-icons/fa'
import { setCurrentView, setDataStatus } from '../../store/common/common'
export default function Friends({ list }) {
    const dispatch = useDispatch()
    const { loggedInUser, userList } = useSelector(state => state.user.userSlice)
    const { dataStatus } = useSelector(state => state.common)
    // to unfriend
    const onUnfriend = (relation_id, names) => {
        // confirm(`Are you sure you wnant to unfriend ${names}?`)
        Unfriend(relation_id).then(resolve => {
            alert("Unavailable")
        }).catch(err => {
            alert("Failed to add new friend")
        })
    }

    // to show mutual friends
    const onMutualFriends = (friendId) => {
        dispatch(setMutualFriends(FindMutualFriends(loggedInUser.friends, friendId, userList)))
        dispatch(setCurrentView('Mutual Friends'))
    }


    return (
        <div className='w-full py-5'>

            {
                dataStatus == 'mapped' && loggedInUser.friends && loggedInUser.friends.length > 0 && dataStatus == 'mapped' &&
                < table className='w-full table friend-list-table mt-5'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Username</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>User Email</th>
                            <th>Status</th>
                            <th>Mutual Friends</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            loggedInUser.friends.map((friend, i) =>
                                <tr key={friend.first_name + i + friend.id}>
                                    <td>{i + 1}</td>
                                    <td>
                                        <div className='flex items-center justify-start'>
                                            <img
                                                src={`img/others/${friend.dp}`}
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
                                            {friend.username}
                                        </div>
                                    </td>
                                    <td>{friend.first_name}</td>
                                    <td>{friend.last_name}</td>

                                    <td>{friend.email}</td>
                                    <td><Badge>Active</Badge></td>
                                    <td>{FindMutualFriends(loggedInUser.friends, friend.id, userList).length} Mutual Friends</td>
                                    <td>
                                        <div className='flex'>
                                            <Button onClick={() => onMutualFriends(friend.id)} style={{ height: 35 }}><small style={{ fontSize: 11 }}>View Mutual Friends</small></Button>
                                            <Button onClick={() => onUnfriend(friend.relation_id, `${friend.first_name} ${friend.last_name}`)} className="ml-5 unfriend-btn" style={{ height: 35 }}><small style={{ fontSize: 11 }}>Unfriend</small></Button>
                                        </div>
                                    </td>
                                </tr>

                            )
                        }
                    </tbody>
                </table>
            }
            {
                dataStatus == 'mapped' && loggedInUser.friends && loggedInUser.friends.length == 0 &&
                <div className='w-full h-full flex items-center justify-center flex-col' style={{ height: 300 }}>
                    <FaSadTear size={50} color="var(--defaultgreen)" />
                    <span className='mt-5'>You do not currently have friends</span>
                    <Button onClick={() => dispatch(setCurrentView('Add Friends'))} className="mt-7">Add New Friends Now</Button>
                </div>
            }
        </div >
    )
}
