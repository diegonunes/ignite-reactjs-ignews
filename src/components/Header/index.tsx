import Image from 'next/image';
import logoSvg from '../../../public/images/logo.svg';
import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={logoSvg} alt='ig.news' />
        <nav>
          <a href='#' className={styles.active}>
            Home
          </a>
          <a href='#'>Posts</a>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
};
