export default function(state={},action){
    switch(action.type){
        case 'CONTACT_US':
            return { ...state }
        case 'GET_POLL':
            return {...state, poll: action.payload }
        case 'ADD_VOTE':
            return {...state, poll: action.payload }
        default:
            return state
    }
}