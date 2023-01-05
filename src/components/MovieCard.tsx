import Movie from "../models/Movie";

export default function MovieCard ({
  movie
} : {
  movie: Movie
}) {
  return (
    <div className={"MovieCard"}>
      <div className={"MovieCardImage"}>
        <img src={movie.posterUrl} alt={movie.title + " poster"}/>
      </div>

      <div className={"MovieCardBody"}>
        <div className={"MovieCardTitle"}>
          <h3>{movie.title}</h3>
        </div>

        <div className={"MovieCardSubtitle"}>
          <span>{movie.year}</span>
        </div>
      </div>
    </div>
  )
}