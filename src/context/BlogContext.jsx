import { createContext, useReducer, useEffect } from 'react';
import BlogReducer from './BlogReducer';
//using context hook
const BlogContext = createContext();


export const BlogProvider = ({ children })=>{
    //sets initial state as an obj and each state "value is kept as a property"
    const initialState = {
        isOpen: false,
        articles: [],
        latest: null,
        currentArticle: {}
    }
    //Fucntion to pullout individual article
    const articleData = async(name)=>{
        //fetches article list from json server
        const articles = await fetch("/articles");
        const result = await articles.json();
        //awaits and parse the JSON, then use filter to use passed in article name to pick out desired article
        const articleObj = await result.filter((item) => item.title === name)
        //Normalise data
        const res = articleObj[0]
        //set context
        return dispatch({type: "GET_ARTICLE", payload: res})
    }
    //simple async function that pulls out article list from JSON server
    const artcleArr = async () => {
        const articles = await fetch("/articles")
        const res = await articles.json()
        return dispatch({ type: "SET_ARTICLES", payload: res})
    }
    //async function that queries the articles in DB and sorts by date tag, returns the link information of the first index (latest article)
    const latestArr= async ()=>{
        const articles = await fetch("/articles");
        const result = await articles.json();
        const dateSortedArr = result.sort((a, b) => {
            return new Date(b.date).getTime() - new Date(a.date).getTime()
        })
        const latest = dateSortedArr[0]
        return dispatch({type: `GET_LATEST_ARTICLE`, payload: latest.link})
    }
   
    
    useEffect(() => {
        artcleArr();
        latestArr();
    }, [])
    //destructure state and dispatch funcions which are passed through app as children by our context provider
    const [state, dispatch] = useReducer(BlogReducer, initialState)


    return <BlogContext.Provider value={{ dispatch,articleData,...state}}>
        {children}
    </BlogContext.Provider>
}

export default BlogContext;

