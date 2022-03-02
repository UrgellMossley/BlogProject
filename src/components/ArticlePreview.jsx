import stock from '../assets/img/stock.jpg'
function ArticlePreview(article) {
    //destructure variables from the article object
  const {title,img,leadText,date} = article.value
  //uses img tag from obj for dynamic image loading
  let image = require(`../assets/img/${img}.jpg`)
  //error handling
  try {
    if (!image) image = stock
  } catch (error) {
    console.log(`image with name of: ${img} doesn't exist`)
  }

  return (
    <article className={`relative object-fit transition-transform hover:scale-105 hover:-translate-y-3 ease-in-out delay-300 border-solid xxs:px-0 xs:px-5 sm:px-0 border-slate-200 duration-150 border-rounded`}>
        <h3 className='absolute z-10 top-5 hover:underline text-slate-200 text-3xl px-3'>{title}</h3>
        <img className='col-span-3  z-0 row-span-2 h-48 w-80 object-fit  brightness-75' src={image} alt="placeholder" />
        <p className='absolute z-10 bottom-5 xxs:text-sm font-bold text-xl text-slate-200 px-3'>{leadText}</p>
        <small className='text-slate-200 absolute bottom-10 py-2 px-3'>{date}</small>
    </article>
  )
}


export default ArticlePreview;

