import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

type IHeader = {
  height: number;
};

const Header: React.FC<IHeader> = ({ height }: IHeader) => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(router.pathname === "/");
  }, [router]);

  const menuOpen = () => {
    document.documentElement.classList.toggle("menu-open");
  };

  return (
    <header className="header">
      {!isVisible && (
        <style>{`
          .header:after {
            border-bottom: none;
          }
          .header{
            background-color:rgba(255, 255, 255, 0.1);
            padding-bottom:20px;
          }
        `}</style>
      )}

      <div className="header__container">
        <a href="/" className="header__logo">
          IOSO
        </a>
        <nav className="header__nav">
          <div className="header__body">
            <ul className="header__list">
              <li className="header__item">
                <Link href="/Quizzes">Quizzes</Link>
              </li>
              <li className="header__item">
                <Link href="/SignIn">Sign In</Link>
              </li>
              <li className="header__item__sign-up">
                <Link href="/SignUp">Sign Up</Link>
              </li>
            </ul>
          </div>
        </nav>
        <button className="icon-menu" type="button" onClick={menuOpen}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="svg1">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 6.001h18m-18 6h18m-18 6h18" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="svg2">
            <path
              fill="currentColor"
              d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275L12 13.4Z"
            />
          </svg>
        </button>
        {isVisible && (
          <div className="lines">
            <div className="lines__line-1" style={{ height: `${height}px` }}></div>
            <div className="lines__line-2" style={{ height: `${height}px` }}></div>
            <div className="lines__line-3" style={{ height: `${height}px` }}></div>
            <div className="lines__line-4" style={{ height: `${height}px` }}></div>
            <div className="lines__line-5" style={{ height: `${height}px` }}></div>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
