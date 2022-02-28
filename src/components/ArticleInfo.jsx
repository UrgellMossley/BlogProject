import {useContext,useEffect,useState} from 'react';
import BlogContext from '../context/BlogContext';
import {Link} from 'react-router-dom';

function ArticleInfo() {
  const [startDate, setDate] = useState(null)
  let x = new Date("March 6, 2022 19:00:00")

 
useEffect(()=>{
  let today = new Date(Date.now())
  
  const diff = (x.getTime() - today.getTime())
  const normalised = diff <= 0 ? `imminent` : diff
  setDate(normalised)
    }, [])

const day = x.getDay()
const date =x.getDate()
const month = x.getMonth() + 1
const year = x.getFullYear()
const hours = x.getHours()
const minutes = x.getMinutes()
const dayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  
    const {articles} = useContext(BlogContext)
  return (
    <section className=" px-5 bg-slate-200 py-10 grid grid-rows-articleLayout grid-cols-1 lg:grid-cols-6 gap-2">
        <h3 className="lg:row-span-1 col-span-full text-5xl font-bold p-4 mt-2 xs:text-center lg:text-left">Articles</h3>
          <article className="flex row-start-2 flex-col col-span-4">
        {articles && articles.map((item,index)=>{
            return <section key={index} className="grow  p-4 border-b-1 border-black last:mb-2 ">
              <Link className="text-xl font-bold" to={`/post/${item.link}`}><h4>{item.title}</h4></Link>  
                      <p className='mb-4'>{item.leadText} Written on: {item.date}</p>
                      <article className='flex flex-row '>
                          {item.chips && item.chips.map((chip,index) => {
                            return <span key={index} className='rounded-full text-slate-200 xxs:text-xs sm:text-base p-2 block mx-2 bg-purple-700 first-of-type:ml-0 border-rounded'>{chip }</span>
                          })}
                      </article>
                      
                   </section>
           
        })}
          </article>
          <aside className="justify-center items-start flex-col xxs:hidden lg:flex lg:col-span-2 shadow-xl px-3 py-1 h-40 m-1 border-1 rounded">
              <h4 className="text-2xl text-purple-800"><span className="font-bold text-black">Next Article:</span> "Functions and Objects"</h4>
              <h6 className="text-2xl text-purple-800"><span className="font-bold text-black">ETA:</span> {`${dayArr[day]}, ${date}/${month}/${year} ${hours}:${minutes < 10 ? minutes.toString().padStart(2, 0) : minutes}`}</h6>
              <small className='text-base font-bold'>{`That's ${Math.floor((startDate / (1000 * (3600 * 24))))} days away!`}</small>
          </aside>
    </section>
  )
}

export default ArticleInfo