import { LoginForm } from "./auth/Login.js"
import { fetchLikes, fetchMessages, fetchPosts, fetchUsers } from "./data/provider.js"
import { GiffyGram } from "./GiffyGram.js"

const applicationElement = document.querySelector(".giffygram")

export const renderApp = () => {
    const user = parseInt(localStorage.getItem("gg_user"))
    fetchLikes().then(fetchMessages().then(fetchPosts().then(fetchUsers().then( () => {

    if (!user) {
        applicationElement.innerHTML = GiffyGram()
    } else {
        applicationElement.innerHTML = LoginForm()
    }}
    ))))
}

renderApp()