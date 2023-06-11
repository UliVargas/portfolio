import { useState } from 'react'
import { useLocation } from '@remix-run/react'

import { MovilNavbar } from './MovilNavbar'
import { DesktopNavbar } from './DesktopNavbar'

export interface Route {
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
  const { pathname } = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  const openAndCloseMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <DesktopNavbar routes={routes} pathname={pathname} />
      <MovilNavbar
        routes={routes}
        openAndClose={openAndCloseMenu}
        isOpen={isOpen}
        pathname={pathname}
      />
    </>
  )
}
