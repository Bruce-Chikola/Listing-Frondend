export const GRAPHQL = 'graphapi/'
export const GET_FRIENDS = `
    query {
        allFriends {
            id
            userId
            friendId
        }
    }
`

export const GET_ALL_USERS = `
{
    allUsers {
             id
             username
             email
             firstName
             lastName
         }
         allFriends {
             userId {
                 id
             }
             id
             friendId
         }
     
 }
`

export const ADD_NEW_FRIEND = (uid, fid) => {
    return `
        mutation{
            addNewFriend(friendId:"${fid}",userId:"${uid}"){
                friendData{
                userId{
                    id
                },
                friendId
            }
            }
        }
        `
}

export const SEARCH_USER = (key) => {
    return `
        {
            userByEmail(param:"${key}"){
                username
                firstName
                lastName
                email
                id
            }
        }
        
    `
}