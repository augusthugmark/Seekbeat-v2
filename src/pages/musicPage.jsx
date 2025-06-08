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

  useEffect(() => {
    const fetchStats = async () => {
      const data = await musicService.readInfoAsync();
      setStats(data);
    };
    fetchStats();
  }, []);

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
          Showing{' '}
          <strong>
            {(currentPage - 1) * resultsPerPage + 1}
            –
            {Math.min(currentPage * resultsPerPage, totalResults)}
          </strong>{' '}
          of <strong>{totalResults}</strong> result{totalResults !== 1 && 's'} for "<strong>{query}</strong>"
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
