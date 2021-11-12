import { getPosts } from "../data/provider.js"
import { Post } from "./Post.js";




export const PostList = () => {
    let html = ""
    const Posts=getPosts()
    Posts.forEach(post => {
        html += Post(post) 
    });
    return html
}