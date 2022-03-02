import { Sling as Hamburger } from 'hamburger-react'
import {useContext} from 'react'; 
import { NavLink,Link } from 'react-router-dom';
import BlogContext from '../../context/BlogContext';

function Navbar() {
    //function which toggles bool from context to trigger css classes re hamburger menu and btn
    const { isOpen,dispatch } = useContext(BlogContext)
    //dispatch function sets the state in reducer to false or true
    const handleToggle = ()=> dispatch({ type: "TOGGLE_NAV", payload: isOpen})
    
  return (
      <>
          <nav className="flex sticky top-0 z-30 flex-row justify-between navbar bg-black shadow-xl py-2">
              <a href="/"><button className="btn border-2 btn-ghost h-10 text-xl w-20 text-purple-700 mx-5">TFAW</button></a> 
              <Hamburger size={32}
                  easing='ease-out'
                  onToggle={handleToggle}
                  toggled={isOpen}
              />
              <ul className=" flex flex-row items-center hidden md:block m-2">
                  <li className="inline w-20"><NavLink exact to={'/'} className={({ isActive }) => "transition ease-in-out delay-300 text-slate-200 hover:text-purple-700 duration-300 px-2" + (isActive ? " text-purple-700" : "")} rel="norefferer">Home </NavLink></li>
                  <li className="inline w-20"><NavLink exact to={'/about'} className={({ isActive }) => "transition ease-in-out delay-300 text-slate-200 hover:text-purple-700 duration-300 px-2" + (isActive ? " text-purple-700" : "")} rel="norefferer">About </NavLink></li>
                  <li className="inline w-20"><a className="transition ease-in-out delay-300 hover:scale-125 hover:text-purple-700   duration-300 px-2 text-gray-200" href="https://github.com/UrgellMossley/BlogProject" rel="norefferer">GitHub</a></li>
                  <li className="inline w-20"><a className="transition ease-in-out delay-300 hover:scale-125 hover:text-purple-700  duration-300  px-2 text-gray-200" href="https://www.linkedin.com/in/george-edem-958b8b174/" rel="norefferer">Linkedin</a></li>
              </ul>


          </nav>
          <ul id="links" className={`${isOpen ? `flex items-center justify-center` : `hidden`} w-full hover:opacity-100 opacity-75 fixed bottom-100 h-full bg-black m-0 pb-16 shadow-xl flex-col m-2 z-20`}>
              <li onClick={handleToggle} className="inline my-5 w-20"><NavLink exact to={"/"} className={({ isActive }) => "align-middle text-slate-200 hover:text-purple-700 px-2" + (isActive ? " text-purple-700" : "")} rel="norefferer">Home</NavLink></li>
              <li onClick={handleToggle} className="inline my-5 w-20"><NavLink exact to={"/about"} className={({ isActive }) => "align-middle text-slate-200 hover:text-purple-700 px-2" + (isActive ? " text-purple-700" : "")} rel="norefferer">About</NavLink></li>

              <li className="inline my-5 w-20"><a className="align-middle  hover:scale-105 hover:text-purple-700  px-2 text-gray-200" href="/" rel="norefferer">GitHub</a></li>
              <li className="inline my-5 w-20"><a className="align-middle  hover:scale-105 hover:text-purple-700  px-2 text-gray-200" href="/" rel="norefferer">Contact</a></li>
          </ul>
      </>
      
  )
}

export default Navbar