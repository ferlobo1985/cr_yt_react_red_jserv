export default function(state={},action){
    switch(action.type){
        case 'GET_POSTS':
            return { ...state, list: action.payload }
        case 'GET_POST_BY_ID':
            return { ...state, activePost: action.payload }
        case 'GET_RELATED_POSTS':
            return { ...state, relatedPosts: action.payload }
        case 'CLEAR_POST':
            return { 
                ...state, 
                activePost: action.payload,
                relatedPosts: action.payload 
            }
        default:
            return state
    }
}