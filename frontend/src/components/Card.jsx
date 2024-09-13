import React from 'react';
import Side from '../assets/Side.svg';
import styles from './Card.scss';

const Card = ({ title, children }) => {
    return (
        <div className={styles['card-container']}> {/* Fixed className usage */}
            <div className={styles['card-header']}> {/* Fixed className usage */}
                <img src={Side} alt="Side" />
                <p>{title}</p>
            </div>
            <div className={styles['card-content']}>{children}</div> {/* Fixed className usage */}
        </div>
    );
};

export default Card;

