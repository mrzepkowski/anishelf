import AnimeCard from './AnimeCard';

export default function AnimeList({ animes }) {
    return (
        <div>
            {animes.map(anime => (
                <AnimeCard key={anime.mal_id} anime={anime} />
            ))}
        </div>
    );
}