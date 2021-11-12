import { getLikes } from "../data/provider.js"

document.addEventListener(
   "click", 
   event => {
       if (event.target.id === 'favoriteButton'){
        getLikes()
       }
       
   }
)


export const FavoriteButton = () => {
    return `<button id = favoriteButton'>Favorite</button>`
} 