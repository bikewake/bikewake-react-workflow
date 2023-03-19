
import './App.css';
import PhotoAlbum from "react-photo-album";

const githubLink = "https://github.com/bikewake/alfresco-document-workflows-17"

const photos = [
    { src: "/images/doc-workflows1.png", width: 667, height: 381, href: githubLink },
    { src: "/images/doc-workflows2.png", width: 667, height: 376, href: githubLink },
    { src: "/images/doc-workflows3.png", width: 678, height: 467, href: githubLink },
    { src: "/images/doc-workflows4.png", width: 669, height: 673, href: githubLink },
    { src: "/images/doc-workflows5.png", width: 669, height: 610, href: githubLink },
    { src: "/images/doc-workflows6.png", width: 678, height: 677, href: githubLink },
    { src: "/images/doc-workflows7.png", width: 667, height: 688, href: githubLink },
    { src: "/images/doc-workflows8.png", width: 674, height: 753, href: githubLink }
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
          BikeWake Aikau Workflows
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
