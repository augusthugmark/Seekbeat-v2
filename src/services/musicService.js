const API_BASE_URL = 'https://seido-webservice-307d89e1f16a.azurewebsites.net/api';

class MusicService {
  constructor(baseUrl = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  async readInfoAsync() {
    const res = await fetch(`${this.baseUrl}/Guest/Info`);
    if (!res.ok) throw new Error('Failed to fetch info');
    return await res.json();
  }

  async readMusicGroupsAsync(pageIndex, includeMembers, query, pageSize) {
    const params = new URLSearchParams({
      flat: includeMembers,
      pageNr: pageIndex,
      filter: query ?? '',
      pageSize
    });

    const res = await fetch(`${this.baseUrl}/MusicGroup/Read?${params}`);
    if (!res.ok) throw new Error('Failed to fetch music groups');
    return await res.json();
  }

  async readMusicGroupAsync(id) {
  const res = await fetch(`${this.baseUrl}/MusicGroup/ReadItem?id=${id}`);
  if (!res.ok) throw new Error('Failed to fetch group details');
  return await res.json();
  }

  async readArtistAsync(id, flat = true) {
  const res = await fetch(`${this.baseUrl}/Artist/ReadItem?id=${id}&flat=${flat}`);
    if (!res.ok) throw new Error('Failed to fetch artist');
    return await res.json();
  }

  async readAlbumAsync(id, flat = true) {
    const res = await fetch(`${this.baseUrl}/Album/ReadItem?id=${id}&flat=${flat}`);
    if (!res.ok) throw new Error('Failed to fetch album');
    return await res.json();
  }

}

export default new MusicService();
