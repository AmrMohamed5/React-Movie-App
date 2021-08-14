import React, { useEffect, useState } from 'react';
import data from './data.json'
import MovieCard from './MovieCard';
const Filter = () => {
   const [search, setSearch] = useState('')
    return ( 
        <section  className='container'>
           <form className="d-flex" style={{paddingRight:'20px'}}>
           <input type="range" class="form-range" id="customRange1"/>
        <input onChange={(event) => {setSearch(event.target.value)}} 
         style={{width:'20%',marginLeft:'auto',}} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      {
         data.filter((val) => {
            if (search == '') {
               return val=''
            }
            else if (val.title.toLowerCase().includes(search.toLowerCase())) {
               return val;
            }
         }).map((val) => {
            return (
               <>
               {val.title}
               </>
            )
         })
      }
        </section>
     );
}
 
export default Filter;