
import './App.css';
import PhotoAlbum from "react-photo-album";

const photos = [
    { src: "/images/doc-workflows1.png", width: 667, height: 381 },
    { src: "/images/doc-workflows2.png", width: 667, height: 376 },
    { src: "/images/doc-workflows3.png", width: 678, height: 467 }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://github.com/bikewake"
          target="_blank"
          rel="noopener noreferrer"
        >
          BikeWake GitHub
        </a>
      </header>
      <PhotoAlbum layout="columns" columns="2" photos={photos} />
    </div>
  );
}

export default App;
