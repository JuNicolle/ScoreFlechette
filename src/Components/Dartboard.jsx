import React from 'react';
import './Dartboard.css';

function Dartboard() {
  const handleClick = (score) => {
    alert(`Vous avez touché ${score}!`);
  };

  return (
    <div className="dartboard">
      <div className="outer-ring" onClick={() => handleClick('le outer ring')}>
        <div className="inner-ring" onClick={(e) => { e.stopPropagation(); handleClick('le inner ring'); }}>
          <div className="bullseye" onClick={(e) => { e.stopPropagation(); handleClick('le bullseye'); }}></div>
        </div>
      </div>
    </div>
  );
}

export default Dartboard;