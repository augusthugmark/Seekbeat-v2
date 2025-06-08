import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import musicService from '../services/musicService';
import ApiStats from '../components/ApiStats';
import SearchBar from '../components/SearchBar';
import MusicGroupList from '../components/MusicGroupList';
import Pagination from '../components/Pagination';
import MusicGroupModal from '../components/MusicGroupModal';

const MusicPage = () => {
  const [stats, setStats] = useState(null);
  const [groups, setGroups] = useState([]);
  const [query, setQuery] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  const [selectedGroupId, setSelectedGroupId] = useState(null);

  const resultsPerPage = 10;

  // Ladda API-statistik
  useEffect(() => {
    const fetchStats = async () => {
      const data = await musicService.readInfoAsync();
      setStats(data);
    };
    fetchStats();
  }, []);

  // Hämta musikgrupper när sidan eller sökning ändras
  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const result = await musicService.readMusicGroupsAsync(
          currentPage - 1,
          true,
          query,
          resultsPerPage
        );
        setGroups(result.pageItems);
        setTotalPages(result.pageCount);
        setTotalResults(result.dbItemsCount);
      } catch (err) {
        console.error('Could not get data:', err);
      }
    };

    fetchGroups();
  }, [currentPage, query]);

  // Hantera ny sökning
  const handleSearch = (searchTerm) => {
    setQuery(searchTerm || null);
    setCurrentPage(1);
  };

  return (
    <Container className="my-4">
      {stats && <ApiStats stats={stats} />}

      <SearchBar onSearch={handleSearch} />

      {query && (
        <p className="mt-2">
          {totalResults} result{totalResults !== 1 && 's'} found for "<strong>{query}</strong>"
        </p>
      )}

      <MusicGroupList
        groups={groups}
        onDetailsClick={(id) => setSelectedGroupId(id)}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => {
          if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
          }
        }}
      />

      <MusicGroupModal
        groupId={selectedGroupId}
        show={!!selectedGroupId}
        onClose={() => setSelectedGroupId(null)}
      />
    </Container>
  );
};

export default MusicPage;
