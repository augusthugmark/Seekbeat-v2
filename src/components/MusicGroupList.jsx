import React from 'react';
import MusicGroupCard from './MusicGroupCard';

const MusicGroupList = ({ groups, onDetailsClick }) => {
  if (!groups || groups.length === 0) {
    return <p>No music groups found.</p>;
  }

  return (
    <div className="music-group-list">
      {groups.map((group) => (
        <MusicGroupCard
          key={group.musicGroupId}
          group={group}
          onDetailsClick={() => onDetailsClick(group.musicGroupId)} // 👈 viktigt
        />
      ))}
    </div>
  );
};

export default MusicGroupList;

