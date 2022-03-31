import { Seo } from "../components";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home({ results }) {
  const router = useRouter();
  const onClick = (id, title) => {
    router.push(`/movies/${title}/${id}`);
  };
  return (
    <div className="container">
      <Seo title="Home" />
      {results.length > 0 &&
        results.map((movie) => (
          <div
            className="movie"
            key={movie.id}
            onClick={() => onClick(movie.id, movie.original_title)}
          >
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
            <Link href={`/movies/${movie.original_title}/${movie.id}`}>
              <a>
                <h4>{movie.original_title}</h4>
              </a>
            </Link>
          </div>
        ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  let results = [];
  let error = "";
  try {
    const res = await fetch("http://localhost:3000/api/movies", {
      method: "GET",
      headers: {
        // update with your user-agent
        Accept: "application/json; charset=UTF-8",
        "User-Agent": "*",
      },
    });

    results = await res.json();
  } catch (e) {
    error = e.toString();
    console.log(error);
  }

  return {
    props: {
      results,
      error,
    },
  };
}