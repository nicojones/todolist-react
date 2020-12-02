import React from 'react';
import './_feature.scss';

function FeatureBox ({ img, title }) {
  return (
    <>
      <div className="f-30 place-center">
        <div className="feature">
          <h6 className="feature__title">{ title }</h6>
          <div className="place-center">
            <img src={ img } className="feature__image" alt={ title }/>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeatureBox;
