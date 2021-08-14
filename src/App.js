import React from 'react';
import MovieCard from './components/MovieCard'
import MovieList from './components/MovieList'
import Filter from './components/Filter'
import AddMovie from './components/AddMovie';
function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{textAlign:'center'}}>Movie App</h1>
      </header>
          <Filter/>
          <MovieList/>
          
    </div>
  );
}

export default App;
