import { GrMenu, GrClose } from 'react-icons/gr'
import { FC } from 'react'
import Link from 'next/link'
import classNames from 'classnames'

import { Route } from './Navbar'

interface Props {
  routes: Route[]
  pathname: string
  isOpen: boolean
  openAndClose: () => void
}

export const MovilNavbar: FC<Props> = ({
  routes,
  pathname,
  openAndClose,
  isOpen
}) => {
  return (
    <>
      {/* hamburger */}
      {isOpen ? (
        // close button
        <GrClose
          onClick={openAndClose}
          className="fixed right-[40px] text-3xl z-50 md:hidden"
        />
      ) : (
        <GrMenu onClick={openAndClose} className="text-3xl md:hidden" />
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
                    onClick={openAndClose}
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
