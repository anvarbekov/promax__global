import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import { FaBarsStaggered } from "react-icons/fa6";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="navbar justify-between bg-fuchsia-50 text-teal-600 shadow-2xl">
          <div>
            <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
              <FaBarsStaggered className='text-2xl' />
            </label>
            <Link href="/" className="btn btn-ghost text-lg">
              ProMax Global
            </Link>
          </div>
          <Menu />
        </div>
        {/* <div className="bg-base-300 block md:hidden text-center pb-3">
          <SearchBox />
        </div> */}
      </nav>
    </header>
  )
}

export default Header
