import styles from '@/styles/components/navbar.module.scss';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className={styles.header}>
      <div className={styles.bg}></div>
      <div className={styles.container}>
        <Link href='/'>
          <img
            src='/logo192.png'
            alt='logo'
            className={styles.logoImg}
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
