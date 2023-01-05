import Movie from "../models/Movie";
import React from "react";
import FieldError from "../models/FieldError";

export default function MovieForm ({
  movie,
  errors,
  onSubmit,
  onChange,
  onCancel
}: {
  movie: Movie,
  errors: FieldError,
  onSubmit: (movie: Movie) => void,
  onChange: (movie: Movie) => void,
  onCancel: () => void
}) {
  const change = (e:  React.ChangeEvent<HTMLInputElement>) => {
    onChange({
      ...movie,
      [e.currentTarget.name]: e.currentTarget.value
    });
  }

  return (
    <form className={"MovieForm"} onSubmit={e => {
      e.preventDefault();
      onSubmit(movie);
    }}>
      <div className={"FormControl"}>
        <label>
          <div>Titel</div>
          <input name="title" value={movie.title} onChange={change} className={"title" in errors ? "error-input" : ""}/>
          {"title" in errors && <div className={"error"}>{errors["title"]}</div>}
        </label>
      </div>

      <div className={"FormControl"}>
        <label>
          <div>Poster URL</div>
          <input
            name="posterUrl"
            value={movie.posterUrl}
            onChange={change}
            type={"url"}
          />
          {"posterUrl" in errors && <div className={"error"}>{errors["posterUrl"]}</div>}
        </label>
      </div>

      <div className={"FormControl"}>
        <label>
          <div>Jahr</div>
          <input
            name="year"
            value={movie.year}
            onChange={change}
            type={"number"}
          />
          {"year" in errors && <div className={"error"}>{errors["year"]}</div>}
        </label>
      </div>

      <div className={"MovieFormFooter"}>
        <button className={"button borderless"} onClick={e => {
          e.preventDefault();
          onCancel();
        }}>Cancel</button>

        <button className={"button"}>
          Hinzufügen
        </button>
      </div>
    </form>
  )
}