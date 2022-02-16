
function ArticleInfo() {
    const articleArr = [1, 2, 3, 4]
  return (
    <section className="bg-slate-200 py-10 mx-1 grid grid-rows-articleLayout grid-cols-1 lg:grid-cols-6 gap-2">
        <h3 className="lg:row-span-1 col-span-full text-4xl p-4 mt-2 xs:text-center lg:text-left">Articles</h3>
          <article className="flex row-start-2 flex-col col-span-4">
        {articleArr && articleArr.map((item)=>{
            return <section className="grow  p-4 border-b-1 border-black last:mb-2 ">{item}</section>
           
        })}
          </article>
          <aside className="justify-center items-start flex-col xxs:hidden lg:flex lg:col-span-2 shadow-xl px-3 py-1 h-40 m-1 border-1 rounded">
              <h4 className="text-2xl text-purple-800"><span className="font-bold text-black">Next Article:</span> placeholder</h4>
              <h6 className="text-2xl text-purple-800"><span className="font-bold text-black">ETA:</span> placeholder</h6>
          </aside>
    </section>
  )
}

export default ArticleInfo