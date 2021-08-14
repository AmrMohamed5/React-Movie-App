import React from 'react';
import data from './data.json'
import MovieList from './MovieList'

const MovieCard = ({poster,title,rate,bio}) => {
    return (
      <section className='container row'>
        {data.map((el,index) => (
            <div className='col-4'>
             <div className="card" style={{width:'18rem'}}>
             <img src={el.poster} className="card-img-top" alt="movie image"/>
             <div class="card-body">
               <h5 className="card-title">{el.title}</h5>
               <p className="card-text">{el.bio}</p>
               <p className="card-text">{el.rate}</p>
               <a href="#" className="btn btn-primary">Watch</a>
             </div>
           </div>
        </div>
        ) )}
      </section>
     );
}
 
export default MovieCard;