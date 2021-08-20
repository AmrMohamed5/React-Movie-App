const MoviePage = ({movies,id}) => {

    const movie = movies.find(e => e.id == id)
    let movieData;
    if (movie) {
        movieData = <div>
            <iframe src={movie.trailer} style={{height:'600px', width:'100%'}} title="Iframe Example"></iframe>
            <h1>{movie.title}</h1>
            <p>{movie.bio}</p>
        </div>
    }
        else {
            movieData = <h2>Sorry you enter a wrong url</h2>
        }
    

    const backClick = () => {
        window.history.back();
    }
    return (
        <div className='container'>
        {movieData}
            <button onClick={backClick} type="button" class="btn btn-primary">Back to home</button>
        </div>
    )
}
 
export default MoviePage;