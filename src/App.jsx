import { useState } from 'react';
import './App.css'
import Image from './components/Image';

const API_KEY = '36153569-3b13ba8f6b71784ad93655220';
const API_URL = 'https://pixabay.com/api/?key=';

import responseResults from './mocks/with-results.json'

console.log(responseResults)
const images = responseResults.hits;
const hasImages = responseResults.totalHits > 0;

function App() {
  const [search, setSearch] = useState('');
  
  const handleSubmit = () => {
    const form = document.getElementById('search-form');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
    })
  };

  const handleSearch = () => {
    const input = document.getElementById('search-input');
    const btn = document.getElementById('search-btn');
    btn.addEventListener('click', () => {
      setSearch(input.value);
    });
  };
  console.log(search);
  return (
    <div id="app">
      <header id='search'>
        <form id="search-form" onSubmit={handleSubmit}>
          <input id='search-input' type="text" placeholder='Pájaros azules...'/>
          <button id="search-btn" onClick={handleSearch}>Buscar</button>
        </form>
      </header>
      <main id='gallery'>
        {
          hasImages 
          ? images.map(image => {
            return(
              <figure 
                className='gallery-figure'
                key={image.id}>
                <Image 
                  key={image.id}
                  id={image.id} 
                  tags={image.tags} 
                  previewURL={image.previewURL}
                />
                <figcaption>{image.tags}</figcaption>
              </figure>
            )
          }) 
          : <p>Images not found</p>
        }
      </main>
      <footer>
        Footer
      </footer>
    </div>      
  )
}

export default App
