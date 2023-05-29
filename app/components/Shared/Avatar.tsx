import Image from 'next/image';
import avatar from "public/retrato.jpg";

export const Avatar = () => {
  return (
    <Image
      src='/retrato.jpg'
      alt="Ulises Vargas"
      className="bg-gradient-to-r from-[#127357] from-0% to-[#010B40] to-80% border-4 rounded-full p-1 transition-transform hover:scale-105"
      width={176}
      height={176}
    />
  );
};
