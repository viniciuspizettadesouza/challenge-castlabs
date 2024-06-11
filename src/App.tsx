import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { LIST_EPISODES } from './graphql/queries'

function App() {
  const [search, setSearch] = useState('');
  const { data, loading, error } = useQuery(LIST_EPISODES, {
    variables: { search },
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      <input
        type="text"
        placeholder="Search episodes..."
        className="border p-2 w-full mb-4"
        value={search}
        onChange={handleSearchChange}
      />
      {loading && <p>Loading...</p>}
      {error && <p>Error loading episodes.</p>}
      <ul>
        {data?.listEpisodes?.map((episode: any) => (
          <li key={episode.id} className="border-b p-2">
            <p>
              {episode.title} (Season {episode.seasonNumber}, Episode {episode.episodeNumber})
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App