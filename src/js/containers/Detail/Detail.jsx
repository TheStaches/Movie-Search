import React from 'react';

class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {titleQuery} = this.props;
    return (
      <div className='movieDetail'>
        
        <h1>Movie Finder</h1>

        <div className='row'>
          <div className='col-5'>
          <img src='https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg'></img>
          </div>
          <div className='col-7'>
          <div className='card'>
            <div className='card-header'>Movie Details</div>
            <div className='card-body'>
              <h5>Movie Title</h5>
              <div className='spanTags'>
                <span>release_year</span><span>duration</span><span>genre</span>
              </div>
              <p>plot</p>
              <p>nominations/awars</p>
              <span className='score'>Metascore</span>
              <span className='score'>IMDB</span>
            
            </div>
          </div>
          </div>
        </div>

      </div>
    )
  }
}

export default MovieDetailContainer;