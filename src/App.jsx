import { Album } from './components/Album';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { useState } from 'react';
import data from './data.json';
import { playlists } from './stretched-goal.json';

export const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div>
      <Sidebar
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
        playlists={playlists.items}
      />
      <div
        className={`${isNavOpen ? 'main-container-open' : 'main-container'}`}
      >
        <div>
          <Header title="New singles" />
          <div className="album-collection">
            {data.albums.items
              .filter(album => album.album_type === 'single')
              .map(album => {
                return (
                  <div key={album.id} className="album">
                    <Album album={album} />
                  </div>
                );
              })}
          </div>
        </div>
        <div>
          <Header title="New albums" />
          <div className="album-collection">
            {data.albums.items
              .filter(album => album.album_type === 'album')
              .map(album => {
                return (
                  <div key={album.id} className="album">
                    <Album album={album} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );

  // return <div>Find me in src/app.jsx!</div>;
};
