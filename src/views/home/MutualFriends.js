import React from 'react'
import Badge from '../../shared/Badge'
import { useSelector } from 'react-redux'
import { GenerateDisplayPicture } from '../../api/Functions'
export default function MutualFriends() {
    const { mutualFriends } = useSelector(state => state.user.userSlice)



    return (
        <div className='w-full py-5'>
            <small className='text-gray-500'>Your Mutual Friends</small>
            <table className='w-full table friend-list-table mt-5'>
                <thead>
                    <tr>
                        <th></th>
                        <th>Username</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>User Email</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mutualFriends.length > 0 ?
                            mutualFriends.map((friend, i) =>
                                <tr key={friend.first_name + i + friend.id}>
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
                                            {friend.username}
                                        </div>
                                    </td>
                                    <td>{friend.firstName}</td>
                                    <td>{friend.lastName}</td>

                                    <td>{friend.email}</td>
                                    <td><Badge>Active</Badge></td>

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
