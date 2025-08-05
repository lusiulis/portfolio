'use client';

import styles from '@/styles/components/navbar.module.scss';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { useLayoutEffect, useRef } from 'react';

const Navbar = () => {
  const barRef = useRef(null);

  useLayoutEffect(() => {
    if (!barRef.current) return;

    gsap.to(barRef.current, {
      width: 0,
      duration: 1.5,
    });
  }, []);
  return (
    <div className={styles.header}>
      <div
        className={styles.bar}
        ref={barRef}
      />
      <div className={styles.bg} />
      <div className={styles.container}>
        <Link href='/'>
          <Image
            src='/logo192.png'
            width={70}
            height={70}
            alt='logo'
          />
        </Link>
        <div className={styles.navbar}>
          <Link href='/about'>About</Link>
          <Link href='/contact'>Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
