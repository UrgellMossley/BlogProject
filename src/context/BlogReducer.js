const BlogReducer = (state,action)=>{
    switch (action.type) {
        case "TOGGLE_NAV":
            return{
                ...state,
                isOpen: !action.payload
            }
            
    
        default:
            return state;
    }

}

export default BlogReducer