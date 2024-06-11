import { Link } from "react-router-dom";
import { Episode } from "./interfaces";
import MainLayout from "@layouts/MainLayout";

function App() {
  return (
    <MainLayout>
      {({ data, loading, error }) => (
        <>
          {loading && <p>Loading...</p>}
          {error && <p>Error loading episodes.</p>}
          <ul>
            {data?.listEpisodes?.map((episode: Episode) => (
              <li key={episode.id} className="border-b p-2">
                <Link to={`/episode/${episode.id}`}>
                  {episode.title} (Season {episode.seasonNumber}, Episode{" "}
                  {episode.episodeNumber})
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </MainLayout>
  );
}

export default App;
