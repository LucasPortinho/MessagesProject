import actions from "./actions"

export const fetchMessages = async(dispatch) => {
    dispatch({type: actions.LOADING})
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const jsonResponse = await response.json()

    let counter = 1
    const messagesArray = jsonResponse.filter(message => message.userId <= 2).map(message => {
        message.id = counter
        counter++
        return message
    })

    dispatch({type: actions.LOAD, payload: messagesArray})
}
