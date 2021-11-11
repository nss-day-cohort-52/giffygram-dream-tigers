const apiURL = "http://localhost:3000"
const applicationElement = document.querySelector(".giffygram")


const applicationState = {
    currentUser: {},
    feed: {
        chosenUser: null,
        displayFavorites: false,
        displayMessages: false
    },
    posts: [],
    likes: [],
    messages: [],
    users: []
}

const API = "http://localhost:3000" //based on what my json server was hosting as

export const setCurrentUser = (user) => {
    applicationState.currentUser= user
}

export const fetchPosts = () => {
    return fetch(`${API}/posts`)
        .then(response => response.json())
        .then(
            (posts) => {
                // Store the external state in application state
                applicationState.posts = posts
            }
        )
}
export const fetchLikes = () => {
    return fetch(`${API}/likes`)
        .then(response => response.json())
        .then(
            (likes) => {
                // Store the external state in application state
                applicationState.likes = likes
            }
        )
}
export const fetchMessages = () => {
    return fetch(`${API}/messages`)
        .then(response => response.json())
        .then(
            (messages) => {
                // Store the external state in application state
                applicationState.messages = messages
            }
        )
}
export const fetchUsers = () => {
    return fetch(`${API}/users`)
        .then(response => response.json())
        .then(
            (users) => {
                // Store the external state in application state
                applicationState.users = users
            }
        )
}


export const getCurrentUser = () => {
    return applicationState.currentUser
}
export const getUsers = () => {
    return applicationState.users.map(user => ({ ...user }))
}
export const getPosts = () => {
    return applicationState.posts.map(post => ({ ...post }))
}
export const getLikes = () => {
    return applicationState.likes.map(like => ({ ...like }))
}
export const getMessages = () => {
    return applicationState.messages.map(message => ({ ...message }))
}
export const getFeedState = () => {
    return applicationState.feed.map(feed => ({ ...feed }))
}
