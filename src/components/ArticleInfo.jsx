import {useContext,useEffect,useState} from 'react';
import BlogContext from '../context/BlogContext';
import {Link} from 'react-router-dom';
//Displays all articles at bottom of the page
function ArticleInfo() {
  //State and use effect to render the date of 
const [targetDate, setDate] = useState(null)
//async function that will set the target date to a date held in DB
const fetchDate = async () =>{
  const req = await fetch(`https://json-server-test-master.herokuapp.com/timeStamp`)
  const res = await req.json();
  //returns an arr, so pull out 1st item
  return setDate(res[0])
}
//calls a function everytime the page loads. empty arr of dependency to make it run 1ce only
useEffect(()=>{
  fetchDate()
    }, [])
//timestamp variables allowing to build a flexible template string
  //Unix timestamp of db date variable held in state
  const timeStamp = new Date(targetDate)
  //Today in UNIX time
  const today = new Date(Date.now())
  //Calculates the difference of both 
  const diff = timeStamp.getTime() - today.getTime()
  //sets the value of normalised difference as a number or string. Will be used in component
  const normalised = Math.floor((diff / (1000 * (3600 * 24)))) < 1 ? `imminent` : Math.floor((diff / (1000 * (3600 * 24))))
  //breaks down the target time and stores various timestamp variables
  const day = timeStamp.getDay()
  const date = timeStamp.getDate()
  //as months start from 0 add 1 to make it human readable
  const month = timeStamp.getMonth() + 1
  const year = timeStamp.getFullYear()
  const hours = timeStamp.getHours()
  const minutes = timeStamp.getMinutes()
  //create an array which can be referenced from the index to return the actual day
  const dayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  //pull out articles from context
  const {articles} = useContext(BlogContext)
  return (
    <section className=" px-5 bg-slate-200 py-10 grid grid-rows-articleLayout grid-cols-1 lg:grid-cols-6 gap-2">
        <h3 className="lg:row-span-1 col-span-full text-5xl font-bold p-4 mt-2 xs:text-center lg:text-left">Articles</h3>
          <article className="flex row-start-2 flex-col col-span-4">
          {/* check if there are any articles. If so map them out and create a series of elements for each one */}
        {articles && articles.map((item,index)=>{
            return <section key={index} className="grow  p-4 border-b-1 border-black last:mb-2 ">
            {/* use react-router to link to each article. Pulls out routing information from the article obj held */}
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
              <h6 className="text-xl text-purple-800"><span className="font-bold text-black">ETA:</span> {`${dayArr[day]}, ${date}.${month}.${year} at ${hours}:${minutes < 10 ? minutes.toString().padStart(2, 0) : minutes} CET`}</h6>
              {/* use some conditional logic to check the type of that normalised value. If the differene is less tahn 1 day away we ammend the string  */}
        <small className='text-base font-bold'>{typeof normalised === "number" && normalised >= 2? `That's ${normalised} days away!` : (typeof normalised === "number" && normalised < 2) ? `That's ${normalised} day away!` : normalised}</small>
          </aside>
    </section>
  )
}

export default ArticleInfo