
import React from 'react';

class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='movieSearch'>
        
        <h1>Movie Finder</h1>

        <div className='input-group'>
          <input type='text' className='form-control' />
          <div className='input-group-append'>
            <button className='btn btn-outline-dark' value='button'>Go!</button>
          </div>
        </div>

        <div className='row border'>
          <div className='col-3'>
          <img src='https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg'></img>
          </div>
          <div className='col-9'>
            <h2>'Movie Title'</h2>
            <p>'release_year'</p>
            <hr />
            <p>'plot'</p>
            <button className='btn btn-primary'>More Information</button>
          </div>
        </div>

        <div className='row border'>
          <div className='col-3'>
          <img src='https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg'></img>
          </div>
          <div className='col-9'>
            <h2>'Movie Title'</h2>
            <p>'release_year'</p>
            <hr />
            <p>'plot'</p>
            <button className='btn btn-primary'>More Information</button>
          </div>
        </div>

      </div>
    )
  }
}

export default MovieSearchContainer;