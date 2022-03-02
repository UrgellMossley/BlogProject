//reducer works with context to cleanly hold various state values. Dispacth actions will ammend this down stream 
const BlogReducer = (state,action)=>{
    switch (action.type) {
        //navbar state. set as bool that will flip
        case "TOGGLE_NAV":
            return{
                ...state,
                isOpen: !action.payload
            }
        case "GET_LATEST_ARTICLE":
            return{
                ...state,
                latest: action.payload
            }
            
        case "SET_ARTICLES":
            //article arr returns all articles
            return{
                
                ...state,
                articles: action.payload
            }
        case "GET_ARTICLE":
            //pulls out a particluar article to be used in a component
            return{
                ...state,
                currentArticle: action.payload
            }
        default:
            return state;
    }

}

export default BlogReducer