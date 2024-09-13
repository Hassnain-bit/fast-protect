import PropTypes from 'prop-types';
import './AssuranceCard.scss';
import IconBoxDiamondWhite from '../assets/icons/IconBoxDiamondWhite';

const AssuranceCard = ({ title, children, imageSrc }) => {
  return (
    <div className="assurance-card">
      <img src={imageSrc} className="assurance-card__image" alt="Assurance Card Image" />
      <a href="/" className="assurance-card__button">
        <img src={require('../assets/ButtonIconWhite.svg').default} alt="Button Icon" />
        <p>Demander un devis</p>
      </a>
      <div className="assurance-card__content">
        <h3>
          <IconBoxDiamondWhite/>
          {title}
        </h3>
        <p>{children}</p>
      </div>
    </div>
  );
};

AssuranceCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  imageSrc: PropTypes.string.isRequired, // Add imageSrc prop for validation
};

export default AssuranceCard;
