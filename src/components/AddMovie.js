import React from 'react';  
addNew = () => {

}
const AddMovie = () => {
    return ( 
        <div>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Add Movie
    </button>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add Movie
</button>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
    <input value={} type='text' placeholder='Enter your movie url' />
    <input value={} type='text' placeholder='Enter your movie name' />
    <input value={} type='text' placeholder='Enter your movie type' />
    <input value={} type='text' placeholder='Enter your movie rate' />
    <button onClick={addNew} id='btn' type="button" class="btn btn-primary">Add</button>
    </div>
    </div>
  </div>
</div>
</div>
     );
}
 
export default AddMovie

