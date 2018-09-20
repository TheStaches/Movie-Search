import React from 'react';
import { Link } from 'react-router-dom';


import {
  updateSearchInput,
  searchMovie,
  searchType,
  moreInfo
} from './searchActions';

class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSearchMovie = this.handleSearchMovie.bind(this);
    this.handleSearchType = this.handleSearchType.bind(this);
    this.handleMoreInfo = this.handleMoreInfo.bind(this);
  }

  handleSearchInput(event) {
    const { dispatch } = this.props;
    dispatch(updateSearchInput(event.target.value));
  }

  handleSearchMovie(event) {
    const {dispatch, movieInput, searchType} = this.props;
    if ((event.key === 'Enter' || event.target.value === 'button') && event.target.value !== '') {
      dispatch(searchMovie(movieInput, searchType));
    }
  }

  handleSearchType() {
    const { dispatch } = this.props;
    dispatch(searchType(!this.props.searchType));
  }

  handleMoreInfo(event) {
    const { dispatch, searchType } = this.props;
    dispatch(moreInfo(event.target.name, searchType));
  }

  render() {
    const { movieInput, searchQuery } = this.props;
    return (
      <div className='movieSearch'>
        <h1 className='pageTitle'>Movie Search</h1>
        <div className='input-group'>
          <input
            type='text'
            className='form-control'
            id='searchInput'
            placeholder='Search for a movie.'
            value={ movieInput }
            onChange={ this.handleSearchInput }
            onKeyDown={ this.handleSearchMovie }
          />
        </div>

        <div className='form-check'>
          <input className='form-check-input' type='checkbox' value='' id='defaultCheck1' onClick={ this.handleSearchType } />
          <label className='form-check-label' htmlFor='defaultCheck1'>Search for TV Show</label>
        </div>

        {
          (searchQuery) ?
            searchQuery.sort((a, b) => b.Year.match(/\d+/).join('') - a.Year.match(/\d+/).join('')).map((movie, index) => (
              (
                <div className='row' key={ index }>
                  <div className='col-3'>
                    <img className='poster' alt='Poster' src={ movie.Poster !== 'N/A' ? movie.Poster : 'http://story-one.com/wp-content/uploads/2016/02/Poster_Not_Available2.jpg' } />
                  </div>
                  <div className='col-9'>
                    <h2 className='movieTitle'>{ movie.Title }</h2>
                    <h3 className='movieYear'>{ movie.Year.match(/\d+/)[0] }</h3>
                    <p className='plot'>{ movie.Plot }</p>
                    <p>Actors: <span className='secondary'>{ movie.Actors }</span></p>
                    <p>Rating: <span className='secondary'>{ movie.Rated }</span></p>
                    
                    <div className='icons'>
                      {/* IMDb Button */}
                      <a href={ `https://www.imdb.com/title/${movie.imdbID}/` } target='_blank' className='flexIcon'>
                        <img className='imdb' alt='IMDb' src='https://ia.media-imdb.com/images/M/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@._V1_.png' />
                      </a>

                      {/* Short-circuit Operators */}
                      { movie.Metascore > 60 && <div className='metaCritic flexIcon green'>{ movie.Metascore }</div> }
                      { (movie.Metascore <= 60 && movie.Metascore >= 40) && <div className='metaCritic flexIcon yellow'>{ movie.Metascore }</div> }
                      { movie.Metascore < 40 && <div className='metaCritic flexIcon red'>{ movie.Metascore }</div> }
                      { movie.Metascore === 'N/A' && <div className='metaCritic flexIcon black'>{ movie.Metascore }</div> }

                      {/* Certified Fresh */}
                      {
                        (movie.Ratings[1] && +movie.Ratings[1].Value.slice(0, 2) > 75) ?
                          <img className='tomato flexIcon' alt='tomato' src='https://www.rottentomatoes.com/assets/pizza-pie/images/icons/global/cf-lg.3c29eff04f2.png' />
                          : <span />
                      }
                    </div>
                    <Link
                      to={ `/movie/${movie.imdbID}` }
                      name={ movie.imdbID }
                      onClick={ this.handleMoreInfo }
                      className='btn btn-outline-primary moreInfo'
                    >More Information
                    </Link>
                  </div>
                </div>
              )
            )) : <h1 className='resultFailure'>Sorry No Results Found....</h1>
        }
      </div>
    );
  }
}

export default MovieSearchContainer;
