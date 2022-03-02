import ArticlePreview from "./ArticlePreview"
import {useContext} from "react";
import {Link} from 'react-router-dom';
import BlogContext from "../context/BlogContext";
//Component that renders the latest 3 articles from the db arr
function Showcase() {
  //pull articles from context
  const { articles } = useContext(BlogContext)
  //Sort by comparing the articles date property descending order
  //later use slice to pull out indexes 0-2
  const dateSortedArr = articles.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
  return (
    <section className="bg-slate-200 flex flex-col gap-6 md:gap-4 lg:grid lg:grid-cols-3 lg:grid-rows-2 place-items-center py-2 px-3">
      <aside className="col-span-3">
          <h2 className="text-6xl text-center">Recent Posts</h2>
          <h4 className="text-2xl text-center py-1">My most recent musings:</h4>
      </aside>  
      
      {articles && dateSortedArr.slice(0,3).map((article,index)=>{
       
        return <Link key={index} to={`/post/${article.link}`}><ArticlePreview value={article} key={index} /></Link>
      })}
      
     
    </section>
  )
}

export default Showcase