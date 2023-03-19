
import './App.css';
import PhotoAlbum from "react-photo-album";

const githubLink = "https://github.com/bikewake/alfresco-document-workflows-17"

const photos = [
    { src: "/images/doc-workflows1.png", width: 667, height: 381, href: githubLink },
    { src: "/images/doc-workflows2.png", width: 667, height: 376, href: githubLink },
    { src: "/images/doc-workflows3.png", width: 678, height: 467, href: githubLink }
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
      <PhotoAlbum layout="columns" columns="1" photos={photos}
      renderPhoto={({ photo, wrapperStyle, renderDefaultPhoto }) => (
              <a href={photo.href} style={wrapperStyle} target="_blank" rel="noreferrer noopener">
                  {renderDefaultPhoto({ wrapped: true })}
              </a>
          )}/>
    </div>
  );
}

export default App;
