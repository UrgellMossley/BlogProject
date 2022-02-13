import { createContext, useReducer } from 'react';
import BlogReducer from './BlogReducer';

const BlogContext = createContext();

export const BlogProvider = ({ children })=>{
    const initialState ={
        isOpen: false
    }

    const [state, dispatch] = useReducer(BlogReducer, initialState)

    return <BlogContext.Provider value={{dispatch,...state}}>
        {children}
    </BlogContext.Provider>
}

export default BlogContext;

