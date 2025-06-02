import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const AboutIconLink = () => {
  return (
    <div className="about-link">
      <Link 
        to={{
          pathname: '/about',
          search: '?sort=name',
          hash: '#hello',
        }}
      >
        <FontAwesomeIcon icon={faInfoCircle} size="2x" />
      </Link>
    </div>
  );
};

export default AboutIconLink;
