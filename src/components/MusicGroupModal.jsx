import React, { useEffect, useState } from 'react';
import { Modal, Button, Spinner } from 'react-bootstrap';
import musicService from '../services/musicService';

const MusicGroupModal = ({ groupId, show, onClose }) => {
  const [group, setGroup] = useState(null);
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
  const fetchDetails = async () => {
    if (!groupId) return;

    setLoading(true);
    try {
      const groupData = await musicService.readMusicGroupAsync(groupId);
      setGroup(groupData);

      // ✅ Artister och album finns redan i groupData
      setArtists(groupData.artists ?? []);
      setAlbums(groupData.albums ?? []);
    } catch (error) {
      console.error('Error loading group details', error);
    } finally {
      setLoading(false);
    }
  };

    fetchDetails();
  }, [groupId]);

  
  return (
    <Modal show={show} onHide={onClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{group?.name || 'Loading...'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {loading && <Spinner animation="border" />}

        {!loading && group && (
          <>
            <p><strong>Genre:</strong> {group.strGenre || 'Unknown'}</p>
            <p><strong>Established:</strong> {group.establishedYear || 'Unknown'}</p>

            <h5>Artists:</h5>
            <ul>
              {artists.length > 0 ? (
                artists.map(a => (
                  <li key={a.artistId}>
                    {a.firstName} {a.lastName}
                    {a.musicGroups?.length > 0 && (
                      <em> – {a.musicGroups.map(g => g.name).join(', ')}</em>
                    )}
                  </li>
                ))
              ) : (
                <li>No artists found</li>
              )}
            </ul>

            <h5>Albums:</h5>
            <ul>
              {albums.length > 0 ? (
                albums.map(a => (
                  <li key={a.albumId}><strong>{a.name}</strong> ({a.releaseYear || '?'})</li>
                ))
              ) : (
                <li>No albums found</li>
              )}
            </ul>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MusicGroupModal;