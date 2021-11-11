import { getPosts } from "../data/provider.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitPosts") {
        // Get what the user typed into the form fields
        const userDescription = document.querySelector("input[name='serviceDescription']").value
        const userAddress = document.querySelector("input[name='serviceAddress']").value
        const userBudget = document.querySelector("input[name='serviceBudget']").value
        const userDate = document.querySelector("input[name='serviceDate']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            description: userDescription,
            address: userAddress,
            budget: userBudget,
            neededBy: userDate
        }

        // Send the data to the API for permanent storage
        sendRequest(dataToSendToAPI)
    }
})





export const PostForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="title">Title</label>
            <input type="text" name="Title of Gif" class="input" />
        </div>
        <div class="field">
            <label class="label" for="url">URL of GIF</label>
            <input type="text" name="URL of GIF" class="input" />
        </div>
        <div class="field">
            <label class="label" for="Story of Gif">Story behind your gif</label>
            <input type="textarea" name="storyOfGif" class="input" />
        </div>

        <button class="button" id="saveButton">Save</button>
        <button class="button" id="cancelButton">Cancel</button>
    `

    return html
}
