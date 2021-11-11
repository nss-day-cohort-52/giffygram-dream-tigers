import { getPosts } from "../data/provider.js"





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
            <input type="textarea" name="serviceBudget" class="input" />
        </div>

        <button class="button" id="saveButton">Save</button>
        <button class="button" id="cancelButton">Cancel</button>
    `

    return html
}
