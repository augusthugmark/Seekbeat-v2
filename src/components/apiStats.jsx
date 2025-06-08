import React from 'react';

const ApiStats = ({ stats }) => {
  if (!stats || !stats.db) return null;

  const totalGroups = stats.db.nrSeededMusicGroups + stats.db.nrUnseededMusicGroups;
  const totalArtists = stats.db.nrSeededArtists + stats.db.nrUnseededArtists;
  const totalAlbums = stats.db.nrSeededAlbums + stats.db.nrUnseededAlbums;

  return (
    <div className="api-stats">
      <p>Music groups: {totalGroups}</p>
      <p>Artists: {totalArtists}</p>
      <p>Albums: {totalAlbums}</p>
    </div>
  );
};

export default ApiStats;