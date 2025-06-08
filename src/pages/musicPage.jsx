import React, { useState, useEffect } from 'react';
import musicService from '../services/musicService';
import MusicGroupList from '../components/MusicGroupList';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';
import ApiStats from '../components/ApiStats';

const MusicPage = () => {
  const [groups, setGroups] = useState([]);
  const [query, setQuery] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      const data = await musicService.readInfoAsync();
      setStats(data);
    };
    fetchStats();
  }, []);

  useEffect(() => {
    const fetchGroups = async () => {
      const result = await musicService.readMusicGroupsAsync(currentPage - 1, true, query, 10);
      setGroups(result.pageItems);
      setTotalPages(result.pageCount);
    };
    fetchGroups();
  }, [currentPage, query]);

  return (
    <div>
      {stats && <ApiStats stats={stats} />}
      <SearchBar onSearch={setQuery} />
      <MusicGroupList groups={groups} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
};

export default MusicPage;