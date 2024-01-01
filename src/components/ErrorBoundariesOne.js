import React from 'react';

function ErrorBoundariesOne({heroName}) {
    if(heroName === 'Joker') {
        throw new Error('Not a hero!')
    }
  return (
    <div>
      {heroName}
    </div>
  );
}

export default ErrorBoundariesOne;
