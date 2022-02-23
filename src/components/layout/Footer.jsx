import { FaGithub, FaLinkedin} from 'react-icons/fa'

function Footer() {
const footerYear = new Date().getFullYear();

  return (
      <footer className='footer flex flex-row py-4 shadow-md bg-black justify-between'>
        <nav className='flex flex-row justify-between pl-2 w-20'>
              <FaGithub className='hover:text-purple-900 text-3xl text-slate-200' />
              <FaLinkedin className='hover:text-purple-900 text-3xl text-slate-200' />
        </nav>
        
        <aside className='px-3 text-slate-200'>Copyright &copy; {footerYear}. All Rights Reserved</aside>
    </footer>
  )
}

export default Footer