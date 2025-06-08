import React from 'react';

const MusicGroupCard = ({ group }) => {
  return (
    <div className="music-group-card">
      <h3>{group.name}</h3>
      <button onClick={() => alert(`Details for ${group.name}`)}>Details</button>
    </div>
  );
};

export default MusicGroupCard;
