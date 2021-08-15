import { useState } from "react";
import data from './components/data.json'
import Filter from "./components/Filter";
import MovieList from './components/MovieList'
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
        <h1 style={{textAlign:'center'}}>Movie App</h1>
      <Filter setMovies={setMovies} filter={filter} search={search} setSearch={setSearch} setFilter={setFilter} clearState={clearState} />
      <MovieList movies={movies} filter={filter} search={search}/>
    </>
  );
}
export default App;
