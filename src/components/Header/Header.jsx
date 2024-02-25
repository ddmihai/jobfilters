import styles from './Header.module.scss';

// Images imports
import headerImgDesktop from '../../assets/images/bg-header-desktop.svg';
import headerImgMobile from '../../assets/images/bg-header-mobile.svg';

const Header = () => {
    return (
        <header className={styles.header}>
            <img alt='Draw random pattern header pic' src={headerImgDesktop} className={styles.headerImgDesktop} />
            <img alt='Draw random pattern header pic mobile version' src={headerImgMobile} className={styles.headerImgMobile} />
        </header>
    )
}


export default Header;