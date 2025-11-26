'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { FaBars, FaTimes, FaPlus, FaBoxes, FaSignOutAlt } from 'react-icons/fa'
// Static user

export default function Navbar() {
  const pathname = usePathname()
  const [user, setUser] = useState({
    name: 'apurbo'
  })
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="bg-gray-900 shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo + Mobile button */}
          <div className="flex items-center relative gap-2">
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="focus:outline-none text-white">
                {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
              </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
              <div className="md:hidden p-2 rounded-xl absolute top-13 -left-3 bg-gray-900 shadow-md flex flex-col">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`px-4 py-2 text-center  ${isActive ? 'text-blue-600 font-semibold underline ' : 'text-white hover:text-blue-600'}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )
                })}

                {!user && (
                  <>
                    <Link
                      href="/login"
                      className={`px-4 py-2 text-center border-b btn text-[17px] btn-primary ${pathname === '/login' ? 'bg-blue-700 text-white' : ''}`}
                      onClick={() => setIsOpen(false)}
                    >
                      Login
                    </Link>
                    <Link
                      href="/signup"
                      className={`px-4 py-2 text-center border-b btn text-[17px] btn-primary ${pathname === '/signup' ? 'bg-blue-700 text-white' : ''}`}
                      onClick={() => setIsOpen(false)}
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            )}


            <Link href="/" className="text-2xl font-bold text-white">
              ElectroMart
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition ${isActive ? 'text-blue-600 font-bold underline' : 'text-white   hover:text-blue-600 hover:underline'}`}
                >
                  {link.name}
                </Link>
              )
            })}
          </div>

          {/* User / Auth Buttons */}
          <div className="md:flex items-center space-x-2">
            {user ? (
              // user logged in view
              <div className="dropdown dropdown-end relative ">
                {/* Avatar Button */}
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full ring ring-blue-500 ring-offset-2 ring-offset-white overflow-hidden">
                    <img src={user.image} alt={user.name} />
                  </div>
                </div>

                {/* Dropdown Menu */}
                <ul
                  tabIndex={-1}
                  className="menu text-[17px] space-y-3 menu-sm border   dropdown-content bg-gray-800 rounded-xl shadow-lg mt-6 w-56 p-2 flex flex-col gap-1 z-50"
                >
                  <li>
                    <Link href="/addProduct" className="flex items-center gap-2 text-[16px] text-white px-4 py-2 rounded-lg hover:text-blue-600 hover:bg-blue-100 transition-colors">
                      <FaPlus className="text-blue-500" /> Add Product
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/manageProducts"
                      className="flex items-center gap-2 text-[16px] px-4 text-white py-2 rounded-lg hover:text-blue-600 hover:bg-blue-100 transition-colors"
                    >
                      <FaBoxes className="text-blue-500" /> Manage Products
                    </Link>
                  </li>
                  <li>
                    <button className=" btn btn-outline   text-[16px] px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white text-red-500 transition-colors">
                      <FaSignOutAlt /> Logout
                    </button>
                  </li>
                </ul>
              </div>

            ) : (
              // user not logged in view
              <div className="flex space-x-2">
                <Link href="/login" className={`btn text-white text-[16px] btn-outline btn-primary ${pathname === '/login' ? 'bg-blue-700 text-white' : ''}`}>
                  Login
                </Link>
                <Link href="/signup" className={`btn text-[16px] text-white btn-outline btn-primary ${pathname === '/signup' ? 'bg-blue-700 text-white' : ''}`}>
                  Sign Up
                </Link>
              </div>
            )}

          </div>
        </div>
      </div>


    </nav>
  )
}
