import { LoginForm } from "./auth/Login.js"
import { fetchLikes, fetchMessages, fetchPosts, fetchUsers, getCurrentUser } from "./data/provider.js"
import { GiffyGram } from "./GiffyGram.js"

const applicationElement = document.querySelector(".giffygram")

export const renderApp = () => {
    const user = getCurrentUser()
    fetchLikes().then(
        fetchMessages().then(
            fetchPosts().then(
                fetchUsers().then( () => {

                    if (user.id) {
                        applicationElement.innerHTML = GiffyGram()
                    } else {
                        applicationElement.innerHTML = LoginForm()
                    }
                }
                ))))
}

renderApp()

document.querySelector(".giffygram").addEventListener("stateChanged", () => {
    renderApp()
})