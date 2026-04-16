import Link from "next/link";
import Logo from "../Logo/Logo";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <div className={`container ${css.headerContainer}`}>
        <Link href="/" className={css.logo}>
          <Logo />
        </Link>

        <nav>
          <ul className={css.navigation}>
            <li>
              <Link href="/" className={css.link}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/catalog" className={css.link}>
                Catalog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
