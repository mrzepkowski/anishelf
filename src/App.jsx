import { useState } from 'react';
import AnimeList from './components/AnimeList'
import SearchBar from './components/SearchBar';

const animes = [
  {
    "mal_id": 900001,
    "title": "Hagane no Suiheisen",
    "images": { "jpg": { "image_url": "https://placehold.co/225x318?text=Stalowy+Horyzont" } },
    "score": 8.41
  },
  {
    "mal_id": 900002,
    "title": "Tsuki no Chaya",
    "images": { "jpg": { "image_url": "https://placehold.co/225x318?text=Herbaciarnia" } },
    "score": 7.92
  },
  {
    "mal_id": 900003,
    "title": "Rasuto Sābu",
    "images": { "jpg": { "image_url": "https://placehold.co/225x318?text=Ostatni+Serw" } },
    "score": 8.07
  },
  {
    "mal_id": 900004,
    "title": "Kage no Kōdo",
    "images": { "jpg": { "image_url": "https://placehold.co/225x318?text=Kod+Cienia" } },
    "score": 7.68
  },
  {
    "mal_id": 900005,
    "title": "Ryū no Tani",
    "images": { "jpg": { "image_url": "https://placehold.co/225x318?text=Smocza+Dolina" } },
    "score": 8.76
  },
  {
    "mal_id": 900006,
    "title": "Warai no Kurabu",
    "images": { "jpg": { "image_url": null} },
    "score": null
  }
];

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const query = searchQuery.trim().toLowerCase();
  const results = animes.filter(
    anime => query && anime.title?.trim().toLowerCase().includes(query)
  );


  return (
    <div>
      <SearchBar value={searchQuery} onChange={setSearchQuery} />
      {results.length > 0 ? <AnimeList animes={results} />
      : (<p>{query ? "No results" : "Enter a title to search"}</p>)}
    </div>
  );
}

export default App
