export const reducer = (state, action) => {
    switch (action.type) {
        case 'LOAD':
            return [...action.payload]

        case 'ADD':

            // Here i should update this information to backend
            const message = {
                userId: action.payload.userId,
                id: state[state.length - 1].id + 1,
                title: action.payload.message,
                body: ''
            }

            // Here i should get the bot answer and sended to the user
            const answer = {
                userId: 2, 
                id: state[state.length - 1].id + 2,
                title: 'Olá',
                body: ''
            }
            return [...state, message, answer]

        default:
            return state
    }

}