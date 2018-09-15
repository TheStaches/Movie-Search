import React from 'react';

import {
  updateSearchInput,
  searchMovie
} from './searchActions'

class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSearchMovie = this.handleSearchMovie.bind(this);
  }

  handleSearchInput(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateSearchInput(value));
  }

  handleSearchMovie(event) {
    const {dispatch} = this.props;
    const {movieInput} = this.props;
    if (event.key === 'Enter' || event.target.value === 'button') {
      dispatch(searchMovie(movieInput))
    }
  }

  render() {
    const { movieInput, movies } = this.props
    return (
      <div className='movieSearch'>
        
        <h1>Movie Finder</h1>

        <div className='input-group'>
          <input type='text' className='form-control'
          value={ movieInput } 
          onChange={ this.handleSearchInput }
          onKeyDown={ this.handleSearchMovie } />
          
          <div className='input-group-append'>
            <button 
            className='btn btn-outline-dark' 
            value='button'
            onClick={ this.handleSearchMovie }
            onKeyDown={ this.handleSearchMovie }
            >Go!</button>
          </div>
        </div>

        {
          (movies) ?
            movies.map((movie, index) => {
              return (
                <div className='row border' key={ index }>
                  <div className='col-3'>
                    <img src={movie.Poster}></img>
                  </div>
                  <div className='col-9'>
                    <h2>{ movie.Title }</h2>
                    <p>{ movie.Year }</p>
                    <hr />
                    <p>'plot'</p>
                    <button className='btn btn-primary'>More Information</button>
                  </div>
                </div>
              );
            }) : <h1>Sorry No Results Found.</h1>
        }


        {/* <div className='row border'>
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
        </div> */}

      </div>
    )
  }
}

export default MovieSearchContainer;