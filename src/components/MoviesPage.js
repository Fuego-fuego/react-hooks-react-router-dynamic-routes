import { Route, useRouteMatch } from "react-router-dom";
import React from "react";
import MovieShow from "./MoviesShow";

import MoviesList from "./MoviesList";

function MoviesPage({ movies }) {
  const match = useRouteMatch();



  return (
    <div>
      <MoviesList movies={movies} />

      <Route exact path={match.url}>
        <h3>Choose a movie from the list above</h3>
      </Route>
      
      <Route path={`${match.url}/:movieId`}>
        <MovieShow movies={movies}/>
      </Route>
    </div>
  );
}
export default MoviesPage;
