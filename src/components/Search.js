import React from 'react';
import "./Search.css"

function Search() {
    return(
        <div className="card searchBar mx-auto">
          <h4 className="searchCard">Book Search</h4>
        <form className="align-self-center form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    </div>
    )
}

export default Search;