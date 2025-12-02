import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-dark text-light p-3 text-center'>
      <h4>All Right Reserved &copy; AtulTechino</h4>
      <p className="mt-3 footerlinks">
        <Link to="/about" className='footerlink'>About</Link> |
        <Link to="/contact" className='footerlink'>Contact</Link> |
        <Link to="/policy" className='footerlink'>Privacy Policy</Link>
      </p>
    </div>
  )
}

export default Footer