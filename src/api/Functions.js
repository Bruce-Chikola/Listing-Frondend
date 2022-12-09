import axios from "axios"
import * as constants from './constants'
// generate user profile image
export const GenerateDisplayPicture = () => {
    const DPS = ['dp1.png', 'dp2.webp', 'dp3.jpeg', 'dp4.webp', 'dp6.jpeg', 'dp7.jpeg', 'dp8.jpeg']
    return DPS[Math.floor(Math.random() * DPS.length)];
}

// get logged in user information
export const GetLoggedInUsser = async () => {
    return await axios.get('/api/user').then(resolve => {
        return resolve
    }).catch(err => {
        return []
    })
}

// get the rest of the users
export const GetUserList = async () => {
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    return await axios.post(constants.GRAPHQL, { query: constants.GET_ALL_USERS }).then(resolve => {
        return MapUsers(resolve.data)
    }).catch(err => {
        return []
    })
}

// to add a new friend
export const AddNewFriend = async (uid, fid) => {
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    return await axios.post(constants.GRAPHQL, { query: constants.ADD_NEW_FRIEND(uid, fid) }).then(resolve => {
        return resolve
    }).catch(err => {
        return []
    })
}

// to unfriend a  friend
export const Unfriend = async (relation_id) => {
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    return await axios.post(`/api/unfriend`, {
        id: relation_id
    }).then(resolve => {
        return resolve
    }).catch(err => {
        return []
    })
}


// get the rest of the users
export const SearchUser = async (key) => {
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    return await axios.post(constants.GRAPHQL, { query: constants.SEARCH_USER(key) }).then(resolve => {
        return resolve
    }).catch(err => {
        return []
    })
}



// extract friends
export const LinkUserData = async (loggedInUser, userList = []) => {
    if (userList.length > 0) {
        let newList = {
            friends: userList.find(user => user.user.id == loggedInUser.id).friends,
            others: []
        }
        const fids = newList.friends.map(f => { return f.id })
        userList.map(user => {
            if (!fids.includes(user.user.id) && user.user.id != loggedInUser.id)
                newList.others.push(user)
        })
        return {
            others: newList.others,
            loggedInUser: {
                friends: newList.friends,
                id: loggedInUser.id,
                first_name: loggedInUser.first_name,
                last_name: loggedInUser.last_name,
                username: loggedInUser.username,
                email: loggedInUser.email,
                dp: GenerateDisplayPicture(),

            }
        }

    }

    return false

}

// map friend data to friend ids.. this is because io served raw data from the server
export const MapUsers = (users = []) => {
    let mappedData = []
    const friends = users.data.allFriends.map(friend => { return { user_id: friend.userId.id, id: friend.id, friend_id: friend.friendId } })
    const usrs = users.data.allUsers
    usrs.map(usr => {
        let flList = []
        friends.filter(frnd => {
            if (frnd.user_id == usr.id) {
                let fd = usrs.find(u => u.id == frnd.friend_id)
                flList.push({
                    id: fd.id,
                    username: fd.username,
                    first_name: fd.firstName,
                    last_name: fd.lastName,
                    email: fd.email,
                    dp: GenerateDisplayPicture(),
                })
            }
        })
        mappedData.push({
            user: usr,
            friends: flList
        })
    })
    return mappedData
}

// to get mutual friends from users
export const FindMutualFriends = (activeUserFriends, friendId, userList) => {
    let userFriends = userList.find(user => user.user.id == friendId).friends
    let mutualList = []
    let ids = activeUserFriends.map(user => { return user.id })
    userFriends.map(f => {
        if (ids.includes(f.id)) {
            mutualList.push(
                userList.find(user => user.user.id == f.id).user
            )
        }
    })
    return mutualList
}

export const GraphTest = async () => {
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    return await axios.post(constants.GRAPHQL, { query: constants.GET_FRIENDS }).then(resolve => {
        return resolve
    }).catch(err => {
        return []
    })
}

export const GraphTest2 = async () => {
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    return await axios.post(constants.GRAPHQL, { query: constants.ADD_NEW_FRIEND }).then(resolve => {
        return resolve
    }).catch(err => {
        return []
    })
}

export const GraphTest3 = async () => {
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    return await axios.post(constants.GRAPHQL, { query: constants.GET_ALL_USERS }).then(resolve => {
        return resolve
    }).catch(err => {
        return []
    })
}