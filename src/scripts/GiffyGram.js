import { Header } from "./nav/Header.js"

export const GiffyGram = () => {

    // Show main main UI
    return `
            ${Header()}
            <section class="postList"> to be filled with a function to populate the post list</section>
            
            
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
