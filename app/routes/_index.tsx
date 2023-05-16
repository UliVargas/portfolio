// eslint-disable-next-line camelcase
import type { V2_MetaFunction } from '@remix-run/node'

import { Hero } from '~/components/Shared/Hero'
import { Technologies } from '~/components/Sections/Technologies'
import { Header } from '~/components/Sections/Header'
import { Footer } from '~/components/Sections/Footer'
import { About } from '~/components/Sections/About'

// eslint-disable-next-line camelcase
export const meta: V2_MetaFunction = () => {
  return [{ title: 'Ulises Vargas - Portafolio' }]
}

export default function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Technologies />
      </main>
      <Footer />
    </>
  )
}
