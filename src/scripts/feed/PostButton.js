export const PostButton = () => {
    return `<button id="createPost">Create Post</button>`
}



document.querySelector(".giffygram").addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "createPost") {
        const modal = document.getElementById("postModal")
        modal.style.display="block"
    }
})
document.querySelector(".giffygram").addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "saveButton") {
        const modal = document.getElementById("postModal")
        modal.style.display="none"
    }
})
document.querySelector(".giffygram").addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "cancelButton") {
        const modal = document.getElementById("postModal")
        modal.style.display="none"
    }
})