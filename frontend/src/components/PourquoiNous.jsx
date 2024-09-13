import Card from './Card';
import Icon from './Icon';
import styles from './PourquoiNous.scss';

const PourquoiNous = () => {
    return (
        <div className={styles['pourquoi-nous']}>
            <Icon>Nos Atouts</Icon>
            <p className={styles['title']}>Pourquoi Choisir FastProtect ?</p>
            <div className={styles['card-container']}>
                <Card title="Nos Engagements">
                    Chez Fast Protect, nous nous engageons à vous offrir une expérience client exceptionnelle, des solutions personnalisées et un support fiable à chaque étape. Notre objectif est de vous assurer tranquillité d'esprit et protection optimale.
                </Card>
                <Card title="Notre Equipe">
                    Professionnalisme et Expertise : Notre équipe d'experts dédiés est toujours là pour vous fournir des conseils avisés et vous accompagner dans toutes vos démarches d'assurance.
                </Card>
            </div>
        </div>
    );
};

export default PourquoiNous;