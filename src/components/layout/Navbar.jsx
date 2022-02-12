import { Sling as Hamburger } from 'hamburger-react'
import {useState} from 'react'; 

//remember to push up context/state to context/reducer
function Navbar() {
const [isOpen, setOpen] = useState(false)

const handleToggle = ()=>{
    
     setOpen(!isOpen)
    isOpen ? document.querySelector(`#links`).style.display = "flex" : document.querySelector(`#links`).style.display = "none"

}
  return (
      <>
          <nav className="flex flex-row justify-between navbar bg-black shadow-xl py-2">
              <button className="btn border-2 btn-ghost h-10 text-xl w-20 text-purple-700 mx-5">TFAW</button>
              <Hamburger size={32}
                  easing='ease-out'
                  onToggle={handleToggle}
                  toggled={isOpen}
              />
              <ul className=" flex flex-row items-center hidden md:block m-2">
                  <li className="inline w-20"><a className="relative before:absolute before:block before:inset-1 hover:text-purple-700  px-2 text-gray-200" href="/" rel="norefferer">Home</a></li>
                  <li className="inline w-20"><a className="hover:scale-125 hover:text-purple-700  px-2 text-gray-200" href="/" rel="norefferer">GitHub</a></li>
                  <li className="inline w-20"><a className="hover:scale-125 hover:text-purple-700  px-2 text-gray-200" href="/" rel="norefferer">Contact</a></li>
              </ul>


          </nav>
          <ul id="links" className="hidden flex h-60 bg-black m-0 shadow-xl -translate-y-10 flex-col items-center m-2">
              <li className="inline my-5 w-20"><a className="align-middle  hover:scale-125 hover:text-purple-700  px-2 text-gray-200" href="/" rel="norefferer">Home</a></li>
              <li className="inline my-5 w-20"><a className="align-middle  hover:scale-125 hover:text-purple-700  px-2 text-gray-200" href="/" rel="norefferer">GitHub</a></li>
              <li className="inline my-5 w-20"><a className="align-middle  hover:scale-125 hover:text-purple-700  px-2 text-gray-200" href="/" rel="norefferer">Contact</a></li>
          </ul>
      </>
      
  )
}

export default Navbar