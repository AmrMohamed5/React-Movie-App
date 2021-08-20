import { useState } from "react";
import data from './components/data.json'
import Filter from "./components/Filter";
import MovieList from './components/MovieList'
import MoviePage from "./components/MoviePage";
import { Route } from "react-router-dom";
function App() {
  const [movies , setMovies] = useState(data)
  const [search , setSearch] = useState('')
  const [filter , setFilter] = useState(0)
  
  const clearState = (e) => {
    e.preventDefault();
    setFilter(0)
    setSearch('')
  }
  return (
    <>
    <Route exact path='/'>
        <h1 style={{textAlign:'center'}}>Movie App</h1>
      <Filter setMovies={setMovies} filter={filter} search={search} setSearch={setSearch} setFilter={setFilter} clearState={clearState} />
      <MovieList movies={movies} filter={filter} search={search}/>
      </Route>
      <Route path='/:id' render={({match}) => (<MoviePage movies={movies} id={match.params.id} />)}/>
    </>
  );
}
export default App;
