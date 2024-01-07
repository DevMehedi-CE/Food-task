import React from 'react'

const Navbar = () => {
  return (
    <nav className='mx-6 py-3 mb-10'>
       <div className='flex flex-col lg:flex-row justify-between items-center'>
          <ul className='flex justify-center items-center'>
            <li>MENU</li>
            <li>REWARDS</li>
            <li>LOCATION</li>
            <li>GIFT CARDS</li>
            <li>LOG IN</li>
          </ul>
       </div>
    </nav>
  )
}

export default Navbar