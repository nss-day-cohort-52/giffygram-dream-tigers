import { getCurrentUser, getMessages } from "../data/provider.js"

export const unreadMessages = () => {
    const Current = getCurrentUser()
    const Messages = getMessages() 
    let messageCounter = 0
    Messages.forEach(message => {
        if ((message.read === false) && (message.recipientId === Current.id)) 
            {messageCounter += 1}
  
    })  
    return messageCounter
 }