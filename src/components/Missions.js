/* eslint-disable react/no-string-refs */
import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';
import sr from '../ScrollReveal';

class Missions extends React.Component {
  componentDidMount = () => {
    const config = {
      origin: 'bottom',
      duration: 2500,
      delay: 200,
      distance: '900px',
      scale: 1,
      easing: 'ease',
    };

    sr.reveal(this.refs.box1, config);
  }

  render() {
    return (
      <div
        data-testid="missions"
        className="missions parallax testimonial"
        id="testimonials"
      >
        <div className="container-subtitle">
          <Title headline="Missões" />
        </div>
        <div className="conatiner-information row" ref="box1">
          { missions.map((item) => (<MissionCard
            key={ item.name }
            name={ item.name }
            year={ item.year }
            country={ item.country }
            destination={ item.destination }
          />))}
        </div>
      </div>
    );
  }
}

export default Missions;
