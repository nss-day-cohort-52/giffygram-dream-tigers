import { UserFilterSelect } from "./displayinguser.js"

export const Footer = () => { 
    return  `<footer class="footer">
                <div>
                    <label>Posted By:</label>
                    ${UserFilterSelect()}
                </div>
                <div>
                    <label>Show Favorites Only:</label>
                    <input type=checkbox name="favorites"></input>
                </div>
            </footer>`
        
        }