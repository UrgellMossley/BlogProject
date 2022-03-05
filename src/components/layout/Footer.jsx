import { FaGithub, FaLinkedin} from 'react-icons/fa'

function Footer() {
const footerYear = new Date().getFullYear();

  return (
      <footer className='footer flex flex-row py-4 shadow-md bg-black justify-between'>
        <nav className='flex flex-row justify-between pl-2 w-20'>
        <a href="https://github.com/UrgellMossley/BlogProject"><FaGithub className='hover:text-purple-900 text-3xl text-slate-200' /></a> 
        <a href="https://www.linkedin.com/in/george-edem-958b8b174/"><FaLinkedin className='hover:text-purple-900 text-3xl text-slate-200' /></a>  
        </nav>
        
        <aside className='px-3 text-slate-200'>Copyright &copy; {footerYear}. All Rights Reserved</aside>
    </footer>
  )
}

export default Footer