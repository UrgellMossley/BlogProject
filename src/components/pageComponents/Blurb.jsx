import React from 'react'
import PropTypes from 'prop-types';


function Blurb({title, tag}) {
  return (
      <section className='px-3 mb-4'>
          <h4 className='xxs:text-center sm:text-left lg:text-center font-bold text-xl text-purple-600'>{title}</h4>
          <p className='text-center'>{tag}</p>
      </section>
  )

    
}
Blurb.propTypes = {
    title: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired
}


export default Blurb