import data from "./data.json";
import { Album } from "./components/Album";
import { Header } from "./components/Header";

console.log(data);

export const App = () => {
  return (
    <div>
      <Header title='New albums & singles' />
      <div className='albumCollection'>
        {data.albums.items.map(album => {
          return (
            <div key={album.id} className='album'>
              <Album album={album} />
            </div>
          )
        })}
      </div>
    </div>
  )

  // return <div>Find me in src/app.jsx!</div>;
};
