const initState = {
    posts: [
        {id:1, title:"redu 1", body:"body 1"},
        {id:2, title:"redu 2", body:"body 2"},
        {id:3, title:"redu 3", body:"body 3"},
    ]
}

const RootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_POST') {
        let newPost = state.posts.filter(post => {
            return action.id !== post.id
        })
        return {
            ...state, //kepp all current property and override only post
            posts:newPost
        }
    }
    return state
}

export default RootReducer