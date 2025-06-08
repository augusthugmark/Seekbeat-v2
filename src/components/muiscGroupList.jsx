import React from 'react';
import MusicGroupCard from './musicGroupCard';

const MusicGroupList = ({ groups }) => {
  if (!groups || groups.length === 0) {
    return <p>No music groups found.</p>;
  }

  return (
    <div className="music-group-list">
      {groups.map((group) => (
        <MusicGroupCard key={group.id} group={group} />
      ))}
    </div>
  );
};

export default MusicGroupList;
