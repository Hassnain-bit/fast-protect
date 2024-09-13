import Vector from '../assets/Vector.svg';
import styles from './Icon.scss';

const Icon = ({ children }) => {
    return (
        <div className={styles['icon-container']}>
            <div className={styles['icon-content']}>
                <img src={Vector} alt="Icon" />
                {children}
            </div>
        </div>
    );
};

export default Icon;