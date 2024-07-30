"use client";

import Link from "next/link";
import styles from "./header.module.css";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import NavList from "../nav-list/nav-list";
import logo from "../../../../public/images/logo.png";
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
                <Image width={120} height={40} src={logo} alt="Logo" />
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
