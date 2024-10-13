"use client";

import Link from "next/link";
import styles from "./header.module.css";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import NavList from "../nav-list/nav-list";
import logo from "../../../../public/images/zia-logo-2.png";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.headerWrapper}>
            <div className={styles.logo}>
              <Link href="/">
                <Image className={styles.logoImg} src={logo} alt="Logo" />
              </Link>
            </div>
            <div
              onClick={() => setIsOpen(!isOpen)}
              className={styles.hamburger}
            >
              {isOpen ? <IoClose /> : <CiMenuFries />}
            </div>
            <nav className={`${styles.navbar} ${isOpen ? styles.active : ""}`}>
              {<NavList isOpen={isOpen} setIsOpen={setIsOpen} />}
              <Link href="#" className={styles.quoteBtn}>
                Register
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
