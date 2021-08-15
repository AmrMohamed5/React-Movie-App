import MovieCard from './MovieCard';
const MovieList = ({movies , filter,search}) => {
    return ( 
        <section className='container'>
    { movies.filter((el) => { 
                if (search === '') {
                return el.rate >= filter ;
                }
				else if(el.title.toLowerCase().includes(search.toLowerCase())) {
					return el.rate >= filter 
				}
			}).map((movie) => (
                <MovieCard title = {movie.title} poster = {movie.poster} bio = {movie.bio} rate = {movie.rate} />
			))}
        </section>
        )
}
export default MovieList;