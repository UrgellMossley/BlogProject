import React from 'react'
import {Link} from 'react-router-dom'

function NotFound() {
  return (
      <section className=' hero h-max  bg-slate-200'>
          <div className="hero-content h-max flex grow flex-col justify-center items-center">
              <h1 className='text-5xl text-black'>Page Not Found!</h1>
              <p className='py-3 my-1'>Looks like something went wrong there..</p>
              <p>Click <Link to="/" className='hover:underline'>here</Link> to get back home</p>
        </div>
        

    </section>
  )
}

export default NotFound