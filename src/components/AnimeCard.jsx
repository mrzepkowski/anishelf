export default function AnimeCard({ anime }) {
    const title = anime.title;
    const image = anime.images?.jpg?.image_url || "/nocover.jpg";
    const score = anime.score ?? "N/A";

    return (
        <div>
            <img src={image} alt={title} />
            <p>{title}</p>
            <p>Score: {score}</p>
        </div>
    );
}