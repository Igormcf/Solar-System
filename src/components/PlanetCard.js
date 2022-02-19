import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card" className="container-planets">
        <div>
          <h3 data-testid="planet-name">{ planetName }</h3>
        </div>
        <div className="container-img">
          <img
            src={ planetImage }
            alt={ `Planeta ${planetName}` }
            className={ planetName }
          />
        </div>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
