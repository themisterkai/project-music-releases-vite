import { Album } from './components/Album';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { useState } from 'react';
import data from './data.json';
import { playlists } from './stretched-goal.json';
import { headerSinglesAlbums } from './contants';

export const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [albumData, setAlbumData] = useState(data.albums.items);
  const [headerName, setHeaderName] = useState(headerSinglesAlbums);
  return (
    <div>
      <Sidebar
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
        playlists={playlists.items}
        setAlbumData={setAlbumData}
        albumData={data.albums.items}
        setHeaderName={setHeaderName}
      />
      <div
        className={`${isNavOpen ? 'main-container-open' : 'main-container'}`}
      >
        <div>
          <Header title={headerName} />
          <div className="album-collection">
            {albumData.map(album => {
              return (
                <div key={album.id} className="album">
                  <Album album={album} />
                </div>
              );
            })}
          </div>
        </div>
        {/* <div>
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
        </div> */}
      </div>
    </div>
  );

  // return <div>Find me in src/app.jsx!</div>;
};
