import { Header } from "./nav/Header.js"
import { PostList } from "./feed/PostList.js"
import { Footer } from "./nav/Footer.js"


export const GiffyGram = () => {
    let html = ""
    html += `${Header()}
            ${Footer()}
            <section class="postList">${PostList()} $</section>

            `
    // Show main main UI
    return html
}
