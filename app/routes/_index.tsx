// eslint-disable-next-line camelcase
import type { V2_MetaFunction } from '@remix-run/node'

import { Technologies } from '~/components/Sections/Technologies'
import { Hero } from '~/components/Sections/Hero'
import { About } from '~/components/Sections/About'

// eslint-disable-next-line camelcase
export const meta: V2_MetaFunction = () => {
  return [{ title: 'Ulises Vargas - Sobre Mí' }]
}

export default function Index() {
  return (
    <>
      <Hero />
      <About />
      <Technologies />
    </>
  )
}
