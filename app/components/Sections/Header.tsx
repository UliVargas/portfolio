import { Navbar } from '../Shared/Navbar'

export const Header = () => {
  return (
    <header className="fixed z-10 w-full bg-white h-[120px] flex justify-center items-center border border-spacing-y-4">
      <Navbar />
    </header>
  )
}
