import ProfilePic from "../../assets/img/profilePic.jpg"
import { useContext } from "react"
import {Link} from "react-router-dom"
import BlogContext from "../../context/BlogContext"
function Header() {

const {latest} = useContext(BlogContext)

  /* Todo: create a slide show for figure el and rotate through  4 differnt images every 3 s*/
  return (
    <header className="fill grid content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-100 lg:h-screen gap-8">
          <h1 className="md:col-span-2   lg:col-span-full text-6xl text-center mt-5 text-gray-100 font-bold px-2">
            Tales From Along The Way
        </h1>
      <figure className="lg:col-span-2 md:row-start-2 lg:-translate-x-10 lg:translate-y-28 flex justify-center items-center px-2">
        <img src={ProfilePic} className="shadow-xl rounded h-96" />
      </figure>
          <article className="lg:col-span-2 md:row-start-2 px-2 flex flex-col  justify-center">
              <p className="text-2xl text-center font-bold mt-5 text-gray-100 ">My name is George, and I love learning how to use <span className="text-yellow-500">Javascript</span></p>
              <p className="text-2xl text-center font-bold my-1 text-gray-100 ">This blog project is a demostration of <span className="text-yellow-500">what I can do</span></p>
              <p className="text-2xl text-center font-bold my-1 text-gray-100 ">Keep up with my <span className="text-yellow-500">progress</span> and learn with me!</p>
        <Link className="block m-auto" to={`/post/${latest}`}><button className=" px-5 py-3 my-4 shadow-xl active:translate-y-1 outline-none outline-offset-2 focus:outline-teal-200 hover:scale-105  font-bold  bg-teal-500 text-white rounded"> Latest Work</button></Link>   
        </article>
        
         
    </header>
  )
}

export default Header