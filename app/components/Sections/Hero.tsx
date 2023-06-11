import { Avatar } from '../Shared/Avatar'

export const Hero = () => {
  return (
    <section className="h-[calc(100vh-80px)] md:max-h-[600px] border border-spacing-y-4 bg-gray-100">
      <div className="h-full mx-auto flex flex-col text-center lg:text-left w-[90%] md:flex-row items-center justify-center gap-8">
        <Avatar />
        <div>
          <p className={`text-sm md:text-lg`}>Desarrollador Web Full-Stack</p>
          <h2 className="bg-gradient-to-r from-[#127357] from-0% to-[#010B40] to-100% bg-clip-text inline-block text-transparent text-6xl font-extrabold pb-3">
            Ulises Vargas
          </h2>
        </div>
      </div>
    </section>
  )
}
