import { Link } from '@remix-run/react'

import { Navbar } from '../Shared/Navbar'

export const Header = () => {
  return (
    <header className="fixed z-10 w-full bg-white h-[80px] md:h-[120px] border border-spacing-y-4">
      <div className="flex lg:max-w-[1200px] md:flex-row items-center sm:mx-auto h-full justify-between md:justify-between px-5">
        <Link to="/">
          <h1 className="bg-gradient-to-l from-[#127357] from-0% to-[#010B40] to-100% bg-clip-text inline-block text-transparent text-4xl font-extrabold">
            {'<U/V>'}
          </h1>
        </Link>
        <Navbar />
      </div>
    </header>
  )
}
