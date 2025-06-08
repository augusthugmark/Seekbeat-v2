const API_BASE_URL = 'https://seido-webservice-307d89e1f16a.azurewebsites.net/api';

class MusicService {
  constructor(baseUrl = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  async readInfoAsync() {
    const res = await fetch(`${this.baseUrl}/info`);
    if (!res.ok) throw new Error('Failed to fetch info');
    return await res.json();
  }

  async readMusicGroupsAsync(pageIndex, includeMembers, query, pageSize) {
    const params = new URLSearchParams({
      pageIndex,
      includeMembers,
      search: query ?? '',
      pageSize,
    });

    const res = await fetch(`${this.baseUrl}/musicgroups?${params}`);
    if (!res.ok) throw new Error('Failed to fetch music groups');
    return await res.json();
  }
}

export default new MusicService();
