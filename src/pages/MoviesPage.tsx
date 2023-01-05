import MovieForm from "../components/MovieForm";
import Dialog from "../components/Dialog";
import MoviesList from "../components/MoviesList";
import useMovies from "../hooks/useMovies";
import {useState} from "react";
import FieldError from "../models/FieldError";

export default function MoviesPage () {
  const {
    movie,
    movies,
    search,
    errors,
    cancelMovieEdit,
    addMovie,
    postMovie,
    setMovie,
    setSearch
  } = useMovies();

  return (
    <div className={"Page"}>
      <div className={"PageHeader"}>
        <div className={"PageHeaderTitle"}>
          <h1>MoviesDB</h1>
        </div>

        <div className={"PageHeaderAction"}>
          <button className={"button"} onClick={addMovie}>Film hinzufügen</button>
        </div>
      </div>

      <div>
        <input value={search} onChange={e => setSearch(e.currentTarget.value)}/>
      </div>

      <div>
        <MoviesList onAddMovie={addMovie} movies={movies}/>
      </div>

      {movie && <Dialog onClose={cancelMovieEdit}>
        <MovieForm
          errors={errors}
          movie={movie}
          onSubmit={postMovie}
          onChange={setMovie}
          onCancel={cancelMovieEdit}
        />
      </Dialog>}
    </div>
  );
}