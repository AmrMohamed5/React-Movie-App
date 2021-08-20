import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';
const MovieList = ({movies , filter,search,}) => {
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
               <div className=''>
               <Link to={`/${movie.id}`} style = {{textDecoration : "none", color: "black"}} > 
                <MovieCard id={movie.id} title = {movie.title} poster = {movie.poster} bio = {movie.bio} rate = {movie.rate} />
                </Link>
                </div>
			))}
        </section>
        )
}
export default MovieList;