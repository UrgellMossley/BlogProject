import ArticlePreview from "./ArticlePreview"
import {useContext} from "react"
import BlogContext from "../context/BlogContext"

function Showcase() {
  const { articles } = useContext(BlogContext)
  return (
    <section className="bg-slate-200 flex flex-col gap-4 lg:grid lg:grid-cols-3 lg:grid-rows-2 place-items-center py-2 px-3">
      <aside className="col-span-3">
          <h2 className="text-6xl text-center">Recent Posts</h2>
          <h4 className="text-2xl text-center py-1">My most recent musings:</h4>
      </aside>  
      {articles && articles.map((article,index)=>{
       
        return <ArticlePreview value={article} key={index}/>
      })}
      
     
    </section>
  )
}

export default Showcase