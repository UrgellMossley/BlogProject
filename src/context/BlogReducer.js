const BlogReducer = (state,action)=>{
    switch (action.type) {
        case "TOGGLE_NAV":
            return{
                ...state,
                isOpen: !action.payload
            }
            
        case "SET_ARTICLES":
            return{
                
                ...state,
                articles: action.payload
            }
        case "GET_ARTICLE":
            return{
                ...state,
                currentArticle: action.payload
            }
        default:
            return state;
    }

}

export default BlogReducer