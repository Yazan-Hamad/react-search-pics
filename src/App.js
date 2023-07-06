import SearchBar from './components/SearchBar';
import searchImages from './api';
import ImageList from './components/ImageList';
import { useState } from 'react';
function App() {

  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar onSubmit={handleSubmit} />
      </header>
      <ImageList images={images} />
    </div>
  );

}

export default App;
