import { getUsers } from "../data/provider.js"

export const UserFilterSelect = () => {
    let html = `<select id="idSelect_userFilter" name="idSelect_userFilter">
    <option value="0"> All Users...</option>` //+ "<option value=> userNames... </option>"
    
const users = getUsers()

    users.forEach((fiftyfive) => {
       
        html = html +  `<option value="name">  ${fiftyfive.name} </option>`
    })
    return html
}