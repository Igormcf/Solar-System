import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="container-solar-system parallax">
        <div className="container-subtitle">
          <Title headline="Planetas" />
        </div>
        <div className="conatiner-planets">
          { planets.map((item) => (<PlanetCard
            key={ item.name }
            planetName={ item.name }
            planetImage={ item.image }
          />))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
