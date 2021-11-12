import { FavoriteButton } from "./FavoriteButton.js";



export const Post = (post) => {
    let html = ""
    html += `<section class="post">
                <header>
                    <h2 class="post__title">${post.title}</h2>
                </header>
                <img class="post__image" src=${post.imageURL}>
                <div class="post__description">${post.description}</div>
                <div class="post__tagline></div>
                <div class="favoriteButton">${FavoriteButton()}
            </section>`
    return html
}