import { Header } from "./nav/Header.js"
import { PostList } from "./feed/PostList.js"

export const GiffyGram = () => {

    // Show main main UI
    return `
            ${Header()}
            <section class="postList">${PostList()}</section>
            
            
            <footer class="footer">
                <div>
                    <label>Posted By:</label>
                    fill with function to create select element
                </div>
                <div>
                    <label>Show Favorites Only</label>
                    <input type=checkbox name="favorites"></input>
                </div>
            </footer>`
}
