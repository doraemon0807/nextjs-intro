import Seo from "@/components/Seo";
import { useEffect, useState } from "react";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { results } = await (await fetch(`/api/movies`)).json();
      setMovies(results);
      setLoading(false);
    })();
  }, []);

  return (
    <div className="container">
      <Seo title="Home" />

      {loading ? (
        <h3>Loading...</h3>
      ) : (
        movies?.map((movie) => (
          <div className="movie" key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            <h4>{movie.original_title}</h4>
          </div>
        ))
      )}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: space-between;
          margin: 20px 0;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          margin-bottom: 15px;
        }
        .movie:hover img {
          transform: scale(1.02) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
          margin: auto;
        }
      `}</style>
    </div>
  );
}
