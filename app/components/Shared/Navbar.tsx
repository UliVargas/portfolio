'use client'

import { GrMenu, GrClose } from 'react-icons/gr'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import classNames from 'classnames'

interface Route {
  url: string
  label: string
}

const routes: Route[] = [
  {
    url: '/',
    label: 'Sobre Mí'
  },
  {
    url: '/projects',
    label: 'Proyectos'
  }
]

export const Navbar = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const openAndCloseMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <nav className="hidden md:flex">
        {
          <ul className="text-center md:text-left md:flex md:gap-x-6">
            {routes.map(({ url, label }) => {
              return (
                <li
                  className={classNames(
                    'text-md font-normal py-1 md:py-0 text-[#010B40] hover:text-[#127357]',
                    {
                      'text-[#127357]': url === pathname
                    }
                  )}
                  key={url}
                >
                  <Link
                    href={url}
                    className={
                      pathname.startsWith(url)
                        ? 'text-[#127357] underline underline-offset-4'
                        : ''
                    }
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>
        }
      </nav>

      {/* hamburger */}
      {isOpen ? (
        // close button
        <GrClose
          onClick={openAndCloseMenu}
          className="fixed right-[40px] text-3xl z-50 md:hidden"
        />
      ) : (
        <GrMenu onClick={openAndCloseMenu} className="text-3xl md:hidden" />
      )}

      {/* mobile nav */}

      <nav
        className={`h-[100vh] fixed top-[0px] flex flex-col justify-around items-center w-full md:hidden bg-white z-40 duration-[600ms] ${
          isOpen ? 'right-[0px]' : 'right-[-100vw]'
        } `}
      >
        {
          <ul className="text-center md:text-left md:flex md:gap-x-6">
            {routes.map(({ url, label }) => {
              return (
                <li
                  className={classNames(
                    'text-xl font-semibold py-4 md:py-0 text-[#010B40] hover:text-[#127357]',
                    {
                      'text-[#127357]': url === pathname
                    }
                  )}
                  key={url}
                >
                  <Link
                    href={url}
                    className={
                      pathname === url
                        ? 'text-[#127357] underline underline-offset-4'
                        : ''
                    }
                    onClick={openAndCloseMenu}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>
        }
      </nav>
    </>
  )
}
