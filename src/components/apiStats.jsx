import React from 'react';
import { FaUsers, FaGuitar, FaCompactDisc } from 'react-icons/fa';

const ApiStats = ({ stats }) => {
  if (!stats || !stats.db) return null;

  const totalGroups = stats.db.nrSeededMusicGroups + stats.db.nrUnseededMusicGroups;
  const totalArtists = stats.db.nrSeededArtists + stats.db.nrUnseededArtists;
  const totalAlbums = stats.db.nrSeededAlbums + stats.db.nrUnseededAlbums;

  return (
    <div className="api-stats">
      <div className="stat-item">
        <FaUsers size={32} />
        <p>Music groups: {totalGroups}</p>
      </div>
      <div className="stat-item">
        <FaGuitar size={32} />
        <p>Artists: {totalArtists}</p>
      </div>
      <div className="stat-item">
        <FaCompactDisc size={32} />
        <p>Albums: {totalAlbums}</p>
      </div>
    </div>
  );
};

export default ApiStats;