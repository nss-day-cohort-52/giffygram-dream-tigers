import { setCurrentUser } from "../data/provider.js"
import { PostForm } from "../feed/PostForm.js"
import { MessageForm } from "../message/MessageForm.js"
import { unreadMessages } from "../message/UnreadMessages.js"

export const Header = () => {
    return `<nav class="navigation">
                <div class="banner">
                    <img>JiffyLogo</img>
                    <h1>Giffygram</h1>
                </div>
                <button>Post</button>
                <div>
                    ${PostForm()}
                </div>
                <div id="accountStuff">
                    <div id="messageStuff">
                        <button>View Messages</button>
                        ${unreadMessages()}
                        <button>Compose</button>
                        ${MessageForm()}
                    </div>
                    <button id="logout">Logoutt</button>
                </div>
            </nav>`
}

document.querySelector(".giffygram").addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "logout"){ //on clicking logout
        localStorage.setItem("gg_user", null) //sets the local user to a falsy value
        setCurrentUser(null) //makes sure its reset in application state as well. probably redundant, but being thorough
        document.querySelector(".giffygram").dispatchEvent(new CustomEvent("stateChanged"))
    }
})