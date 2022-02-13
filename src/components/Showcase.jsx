import ArticlePreview from "./ArticlePreview"

function Showcase() {
  return (
    <section className="bg-slate-200 pt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-2 m-1">
      <ArticlePreview/>
      <ArticlePreview />
      <ArticlePreview />
      <ArticlePreview />
    </section>
  )
}

export default Showcase