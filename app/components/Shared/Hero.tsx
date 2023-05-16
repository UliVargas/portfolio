import { Avatar } from './Avatar';

export const Hero = () => {
  return (
    <section className="h-[600px] border border-spacing-y-4 bg-gray-100">
      <div className="h-full mx-auto w-[1200px] flex items-center justify-center gap-8">
        <Avatar />
        <div>
          <h4 className="text-lg font-sans">Desarrollador Web Full-Stack</h4>
          <h2 className="bg-gradient-to-r from-[#127357] from-0% to-[#010B40] to-100% bg-clip-text inline-block text-transparent text-6xl font-extrabold pt-1 pb-3">
            Ulises Vargas
          </h2>
        </div>
      </div>
    </section>
  );
};
