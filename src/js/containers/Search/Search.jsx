import React from 'react';
import { Link } from 'react-router-dom'


import {
  updateSearchInput,
  searchMovie,
} from './searchActions';

class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSearchMovie = this.handleSearchMovie.bind(this);
    // this.handleButtonSearch = this.handleButtonSearch.bind(this);
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
    const { movieInput, searchQuery } = this.props;
    return (
      <div className='movieSearch'>
        <div className='input-group'>
          <input
            type='text'
            className='form-control'
            id='searchInput'
            autoFocus
            value={ movieInput }
            onChange={ this.handleSearchInput }
            onKeyDown={ this.handleSearchMovie }
          />
          <div className='input-group-append'>
            <button
              className='btn btn-outline-dark'
              id='search'
              value='button'
              onClick={ this.handleSearchMovie }
              onKeyDown={ this.handleSearchMovie }
            >Go!</button>
          </div>
        </div>

        {
          (searchQuery) ?
            searchQuery.map((movie, index) => {
              return (
                <div className='row border' key={ index }>
                  <div className='col-3'>
                    <img alt='Poster' src={ movie.Poster } />
                  </div>
                  <div className='col-9'>
                    <h2>{ movie.Title }</h2>
                    <p>{ movie.Year }</p>
                    <hr />
                    <p className='plot'>{ movie.Plot }</p>
                    <Link
                      to={ `/movie/${movie.imdbID}` }
                      className='btn btn-primary moreInfo'
                    >
                    More Information
                    </Link>
                  </div>
                </div>
              );
            }) : <h1>Sorry No Results Found.</h1>
        }
      </div>
    );
  }
}

export default MovieSearchContainer;
