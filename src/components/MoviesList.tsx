import EmptyIndicator from "./EmptyIndicator";
import Movie from "../models/Movie";
import MovieCard from "./MovieCard";

export default function MoviesList ({
  onAddMovie,
  movies
} : {
  onAddMovie: () => void,
  movies: Movie[]
}
) {
  return (
    <div className={"MovieList"}>
      {movies.length ? movies.map(movie => (
        <div className={"MovieListCard"} key={movie.id}>
          <MovieCard movie={movie}/>
        </div>
      )) : (
        <EmptyIndicator
          text={"Keine Filme vorhanden"}
          buttonText={"Film hinzufügen"}
          onClick={onAddMovie}
        />
      )}
    </div>
  );
}