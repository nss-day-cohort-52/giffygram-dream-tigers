import { getPosts , sendPosts  } from "../data/provider.js"


// const applicationElement = document.querySelector(".saveButton")

addEventListener("click", 
clickEvent => {
    if (clickEvent.target.id === "saveButton") {
        // Get what the user typed into the form fields
        const gifTitle = document.querySelector("input[name='titleOfGif']").value
        const  gifUrl = document.querySelector("input[name='urlOfGif']").value
        const gifStory = document.querySelector("input[name='storyOfGif']").value
      
        // Make an object out of the user input
        const postObj = {
            title: gifTitle,
            imageUrl: gifUrl,
            description: gifStory
           
        }

        // Send the data to the API for permanent storage
        sendPosts(postObj)
    }
}

)



export const PostForm = () => {

    let html = `
        <div class="field">
            <label class="label" for="title">Title</label>
            <input type="text" name="titleOfGif" class="input" />
        </div>
        <div class="field">
            <label class="label" for="url">URL of GIF</label>
            <input type="text" name="urlOfGif" class="input" />
        </div>
        <div class="field">
            <label class="label" for="Story of Gif">Story behind your gif</label>
            <input type="textarea" name="storyOfGif" class="input" />
        </div>

        <div>
        <button class="button" id="saveButton">Save</button>
        </div>


        <button class="button" id="cancelButton">Cancel</button>
    `

    return html
}

// document.querySelector(".saveButton").addEventListener("stateChanged", () => {
//     renderApp()
// })