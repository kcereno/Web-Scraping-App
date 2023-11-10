import { Link, NavLink } from '@remix-run/react';

const navLinks = [
  {
    name: 'Search',
    url: '/search',
  },
  {
    name: 'Favorites',
    url: '/favorites',
  },
  {
    name: 'User',
    url: '/user',
  },
];

export default function Navbar() {
  return (
    <header className="w-full">
      <nav className="nav">
        <Link
          to="/"
          className="flex items-center gap-1"
        >
          <p className="nav-logo">
            Price<span className="text-red-400">Wise</span>
          </p>
        </Link>
        <div className="flex items-center gap-5">
          {navLinks.map(({ name, url }) => (
            <NavLink
              key={name}
              to={url}
            >
              {name}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
