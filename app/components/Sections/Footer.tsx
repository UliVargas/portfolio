import { SOCIAL_GITHUB, SOCIAL_LINKEDIN } from "~/utils";
import { Link } from '@remix-run/react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'


export const Footer = () => {
  return (
    <footer className="h-[150px] bg-gray-100 border pb-2">
      <div className="h-full w-[600px] mx-auto flex flex-col justify-end items-center gap-4">
      <div className="flex gap-2 items-center">
          <Link to={SOCIAL_LINKEDIN} target="_blank">
            
            <FaLinkedin size='30px'/>
          </Link>
          <Link to={SOCIAL_GITHUB} target="_blank">
            <FaGithubSquare size='30px' />
          </Link>
        </div>
        <p className="text-[#010B40]">
          Hecho con <span>&#9829;&#65039;</span> desde{" "}
          <span>&#127474;&#127485;</span>
        </p>
      </div>
    </footer>
  );
};
