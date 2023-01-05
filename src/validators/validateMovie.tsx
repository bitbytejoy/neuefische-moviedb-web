import FieldError from "../models/FieldError";
import Movie from "../models/Movie";

export default function validateMovie (movie: Movie): FieldError {
  const errors: FieldError = {};

  if (!movie.title) {
    errors["title"] = "Titel muss angegeben werden";
  }

  if (!movie.posterUrl) {
    errors["posterUrl"] = "Poster URL muss angegeben werden";
  }

  if (movie.year < 1920) {
    errors["year"] = "Keine Filme wurden vor 1920 gemacht";
  }

  return errors;
}