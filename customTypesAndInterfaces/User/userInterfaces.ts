export interface IUserData {
    userName: string
    userDisplayPicture: string
    userEmail: string
    userID: string

    communitiesJoinedID: string[]
    communitiesOwnedID: string[]
    createdPostsID: string[]
    dislikedPostsID: string[]
    likedPostsID: string[]
    userCoins: number
}