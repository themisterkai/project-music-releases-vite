import data from "./data.json";
import { Album } from "./components/Album";
import { Header } from "./components/Header";

export const App = () => {
  return (
    <div>
      <div>
        <Header title="New singles" />
        <div className="albumCollection">
          {data.albums.items
            .filter((album) => album.album_type === "single")
            .map((album) => {
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
        <div className="albumCollection">
          {data.albums.items
            .filter((album) => album.album_type === "album")
            .map((album) => {
              return (
                <div key={album.id} className="album">
                  <Album album={album} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );

  // return <div>Find me in src/app.jsx!</div>;
};
