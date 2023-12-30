import React from "react";
import Image from "next/image";
import Link from "next/link";
const Header: React.FC = () => {
  const menuOpen = () => {
    document.documentElement.classList.toggle("menu-open");
  };

  return (
    <header className="header">
      <div className="header__container">
        <a href="/" className="header__logo">
          IOSO
        </a>
        <nav className="header__nav">
          <div className="header__body">
            <ul className="header__list">
              <li className="header__item">
                <Link href="/dictionaries">Test</Link>
              </li>
              <li className="header__item">
                <Link href="/dictionaries">Sign In</Link>
              </li>
              <li className="header__item__sign-up">
                <Link href="/dictionaries">Sign Up</Link>
              </li>
            </ul>
          </div>
        </nav>
        <button className="icon-menu" type="button" onClick={menuOpen}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            className="svg1"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M3 6.001h18m-18 6h18m-18 6h18"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            className="svg2"
          >
            <path
              fill="currentColor"
              d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275L12 13.4Z"
            />
          </svg>
        </button>
        <div className="lines">
          <div className="lines__line-1"></div>
          <div className="lines__line-2"></div>
          <div className="lines__line-3"></div>
          <div className="lines__line-4"></div>
          <div className="lines__line-5"></div>
        </div>
      </div>
    </header>
  );
};
export default Header;
