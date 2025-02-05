export const reducer = (state, action) => {
    switch (action.type) {
        case 'LOAD':
            return {...state, messages: action.payload, loading: false}

        case 'ADD':

            // Here i should update this information to backend
            const message = {
                userId: action.payload.userId,
                id: state.messages[state.messages.length - 1].id + 1,
                title: action.payload.message,
                body: ''
            }

            // Here i should get the bot answer and send it to user
            const answer = {
                userId: 2, 
                id: state.messages[state.messages.length - 1].id + 2,
                title: 'Olá',
                body: ''
            }
            return {...state, messages: [...state.messages, message, answer] }

        case 'LOADING':
            return {...state, loading: true}

        default:
            return {...state}
    }

}