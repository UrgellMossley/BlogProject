import { createContext, useReducer, useEffect } from 'react';
import BlogReducer from './BlogReducer';

const BlogContext = createContext();




 

export const BlogProvider = ({ children })=>{
    const initialState = {
        isOpen: false,
        articles: [],
        currentArticle: {}
    }
    const articleData = async(name)=>{
        const articles = await fetch("/articles");
        const result = await articles.json();
        const articleObj = await result.filter((item) => item.title === name)
        const res = articleObj[0]
        return dispatch({type: "GET_ARTICLE", payload: res})
    }
    const artcleArr = async () => {
        const articles = await fetch("/articles")
        const res = await articles.json()
        return dispatch({ type: "SET_ARTICLES", payload: res})
    }
    
    useEffect(() => {
        artcleArr();
    }, [])
    const [state, dispatch] = useReducer(BlogReducer, initialState)


    return <BlogContext.Provider value={{ dispatch,articleData,...state}}>
        {children}
    </BlogContext.Provider>
}

export default BlogContext;

