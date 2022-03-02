import { useContext,useEffect } from 'react';
import BlogContext from '../../context/BlogContext';

function BlogHeader({name,img}) {
  const { currentArticle, articleData } = useContext(BlogContext)
//from context pulls out function that renders individual article. 
//Data from the object populates the componnet
  useEffect(()=>{
    articleData(name)

  },[])

  return (
    <section className='hero rounded p-3 min-h-64 w-full flex flex-col items-center'>
      <h1 className='text-center xxs:text-5xl sm:text-6xl'>{currentArticle.title}</h1>
      <h2 className='text-xl mt-3 text-center '>{currentArticle.leadText}</h2>
      <small className='my-3'>Written by George, on {currentArticle.date} </small>
      <img className='xxs:h-32 object-cover xxs:rounded-full xxs:w-32 md:h-64 md:w-2/3 md:rounded mt-3' src={img} alt="article image" /> 

    </section>
  )
}

export default BlogHeader