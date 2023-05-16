import avatar from 'public/retrato.jpg'

export const Avatar = () => {
  return (
    <img
      src={avatar}
      alt="Ulises Vargas"
      className="bg-gradient-to-r from-[#127357] from-0% to-[#010B40] to-80% border-4 max-h-40 rounded-full p-1 transition-transform hover:scale-105 md:max-h-48"
      width="auto"
      height="auto"
    />
  )
}
