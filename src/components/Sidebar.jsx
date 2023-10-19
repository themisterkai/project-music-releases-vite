import { PropTypes } from 'prop-types';

import { Header } from './Header';
import { Playlist } from './Sidebar/Playlist';
import { SidebarLink } from './Sidebar/SidebarLink';
import { headerAlbums, headerSingles, headerSinglesAlbums } from '../contants';

export const Sidebar = ({
  isNavOpen,
  setIsNavOpen,
  playlists,
  albumData,
  setAlbumData,
  setHeaderName,
}) => {
  const filterAlbumData = filter => {
    if (filter == null) {
      setAlbumData(albumData);
    } else {
      const filtered = albumData.filter(album => album.album_type === filter);
      setAlbumData(filtered);
    }
  };
  return (
    <>
      <button
        className={`sidebar-toggle ${
          isNavOpen ? 'sidebar-toggle-open' : 'sidebar-toggle-closed'
        }`}
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        <span className="material-symbols-outlined">menu</span>
      </button>
      <nav className={`nav ${isNavOpen ? 'nav-open' : 'nav-closed'}`}>
        <div className="nav-content">
          <div onClick={() => setHeaderName(headerSingles)}>
            <SidebarLink
              description={headerSingles}
              onClick={filterAlbumData}
              type={'single'}
            />
          </div>
          <div onClick={() => setHeaderName(headerAlbums)}>
            <SidebarLink
              description={headerAlbums}
              onClick={filterAlbumData}
              setHeaderName={setHeaderName}
              type={'album'}
            />
          </div>
          <div onClick={() => setHeaderName(headerSinglesAlbums)}>
            <SidebarLink
              description={headerSinglesAlbums}
              onClick={filterAlbumData}
              setHeaderName={setHeaderName}
              type={null}
            />
          </div>
          <Header title={'Playlists'} />
          {playlists.map(playlist => (
            <Playlist key={playlist.id} playlist={playlist} />
          ))}
        </div>
      </nav>
    </>
  );
};

Sidebar.propTypes = {
  isNavOpen: PropTypes.bool.isRequired,
  setIsNavOpen: PropTypes.func.isRequired,
  playlists: PropTypes.array.isRequired,
  albumData: PropTypes.array.isRequired,
  setAlbumData: PropTypes.func.isRequired,
  setHeaderName: PropTypes.func.isRequired,
};
