import { Link, NavLink, useLocation } from "@remix-run/react";
import classNames from "classnames";

interface Route {
  url: string;
  label: string;
}

const routes: Route[] = [
  {
    url: "/",
    label: "Sobre Mí",
  },
  {
    url: "/projects",
    label: "Proyectos",
  },
];

export const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="flex items-center justify-between w-[1200px] mx-auto px-2">
      <Link
        to="/"
      >
        <h1 className="bg-gradient-to-l from-[#127357] from-0% to-[#010B40] to-100% bg-clip-text inline-block text-transparent text-4xl font-extrabold">
          {"<U/V>"}
        </h1>
      </Link>

      {
        <ul className="flex gap-x-6">
          {routes.map(({ url, label }) => (
            <li
              className={classNames(
                "text-md font-normal text-[#010B40] hover:text-[#127357]",
                {
                  "text-[#127357]": url === pathname,
                }
              )}
              key={url}
            >
              <NavLink to={url} className={({ isActive }) => isActive ? 'text-[#127357] underline underline-offset-4' : ''}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      }
    </nav>
  );
};
