const MovieCard = ({poster,title,bio,rate}) => {
    return (
      <>
             <div key={Math.random()} className="card" style={{width:'18rem'}}>
             <img src={poster} className="card-img-top" alt="movie"/>
             <div className="card-body">
               <h5 className="card-title">{title}</h5>
               <p className="card-text">{bio}</p>
               <p className="card-text">rate : {rate}</p>
             </div>
           </div>
        </>  
     );
}

export default MovieCard;