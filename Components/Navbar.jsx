import React from 'react'

const Navbar = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between flex-wrap gap-4 py-2 px-4">
  <h1 className="text-lg font-sans">Todo APP</h1>
  <ul className="flex flex-wrap justify-center gap-6 text-base">
    <li>Home</li>
    <li>Products</li>
    <li>About</li>
    <li>Contact</li>
  </ul>
</div>
  )
}

export default Navbar
