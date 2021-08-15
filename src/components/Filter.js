const Filter = ({clearState,findMovie,filter,search,setFilter,setSearch}) => {
    return ( 
        <div  className='container'>
           <form className="d-flex" style={{paddingRight:'20px'}}>
           <input onChange={(event) => {setFilter(event.target.value)}} 
            style={{width:'30%',marginTop:'10px'}} min={1} max={10} step={1} defaultValue={0} type="range" className="form-range" id="customRange1"/>
           <input onChange={(e) => {setSearch(e.target.value)}}
         style={{width:'20%',marginLeft:'auto',}} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button onClick={clearState} className="btn btn-outline-success" type="submit">clear</button>
      </form>
         <p>Filter by rate {filter}</p>
        </div>
     );
}
 
export default Filter;