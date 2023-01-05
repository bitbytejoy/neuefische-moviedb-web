import {useEffect, useState} from "react";
import Movie from "../models/Movie";
import axios from "axios";
import FieldError from "../models/FieldError";
import validateMovie from "../validators/validateMovie";

export default function useMovies () {
  const [movie, setMovie] = useState<Movie|null>(null);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [errors, setErrors] = useState<FieldError>({});
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    (async () => {
      const res = await axios.get(`/api/movies?title=${search}`);
      setMovies(res.data);
    })();
  }, [search]);

  const cancelMovieEdit = () => {
    setErrors({});
    setMovie(null);
  };

  const addMovie = () => {
    setMovie({
      id: "",
      title: "",
      posterUrl: "",
      year: new Date().getFullYear()
    });
    setErrors({});
  };

  const postMovie = async (movie: Movie) => {
    const errors = validateMovie(movie);

    if (Object.keys(errors).length) {
      setErrors(errors);
      return;
    }

    const res = await axios.post("/api/movies", movie);
    setMovies([...movies, res.data]);
    setMovie(null);
    setErrors({});
  };

  return {
    movie,
    movies,
    errors,
    search,
    cancelMovieEdit,
    addMovie,
    postMovie,
    setMovie,
    setSearch
  };
}