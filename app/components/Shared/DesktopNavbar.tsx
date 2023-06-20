import classNames from 'classnames'
import { Link } from '@remix-run/react'

import { Route } from './Navbar'

export const DesktopNavbar = ({
  routes,
  pathname
}: {
  routes: Route[]
  pathname: string
}) => {
  return (
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
                  to={url}
                  className={classNames(
                    'relative overflow-hidden inline-block group',
                    {
                      'border-b border-[#127357]': pathname === url
                    }
                  )}
                >
                  <div
                    className={classNames({
                      'border-b border-[#127357] absolute top-0 left-0 right-0 bottom-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center':
                        pathname !== url
                    })}
                  ></div>
                  <span>{label}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      }
    </nav>
  )
}
