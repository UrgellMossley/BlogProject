import ArticlePreview from "./ArticlePreview"
// md:grid-rows-2 grid grid-cols-1 grid-rows-1 md:grid-cols-3 gap-2
function Showcase() {
  return (
    <section className="bg-slate-200 flex flex-col gap-4 lg:grid lg:grid-cols-3 lg:grid-rows-2 place-items-center pt-2 px-2 m-1 mb-0">
      <aside className="col-span-3">
          <h2 className="text-6xl text-center">Recent Posts</h2>
          <h4 className="text-2xl text-center py-1">My most recent musings:</h4>
      </aside>  
      <ArticlePreview/>
      <ArticlePreview />
      <ArticlePreview />
    </section>
  )
}

export default Showcase