import React from 'react';
import { Link } from 'react-router-dom';
import ReactStars from 'react-stars';


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
    const {dispatch, movieInput, movieTv} = this.props;
    const { value, name } = this.props;
    if ((event.key === 'Enter' || value === 'button') && value !== '') {
      dispatch(searchMovie(movieInput, movieTv));
    }
  }

  handleSearchType(event) {
    const { dispatch, activeButton } = this.props;
    const { name } = event.target;
    dispatch(searchType(name, activeButton));
  }

  handleMoreInfo(event) {
    const { dispatch, searchType } = this.props;
    dispatch(moreInfo(event.target.name, searchType));
  }

  render() {
    const { movieInput, searchQuery, activeButton } = this.props;
    console.log('activeButton', activeButton);
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

        {/* <div className='btn-group btn-group-toggle' data-toggle='buttons'>
          <label className='btn btn-outline-primary'>
            <input type='radio' name='movie' { activeButton ? 'active' : '' } onClick={ this.handleSearchType }/> Movie
          </label>
          <label className='btn btn-outline-success'>
            <input type='radio' name='series' { activeButton ? '' : 'active' } onClick={ this.handleSearchType }/> TV Show
          </label>
        </div> */}

        {/* Movie Cards */}
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
                    <div className='subHeading'>
                      <h3 className='movieYear'>{ movie.Year }</h3>
                      <h3 className='movieRating'>{ movie.Rated }</h3>
                      <h3 className='movieDuration'>
                        { (movie.Runtime !== 'N/A' && +movie.Runtime.match(/\d+/)[0] >= 60) ? Math.floor((+movie.Runtime.match(/\d+/)[0] / 60)) + 'h ' : <span />}
                        { (movie.Runtime !== 'N/A' && +movie.Runtime.match(/\d+/)[0] !== 60) ? ((movie.Runtime.match(/\d+/)[0] % 60) + 'm') : <span />}
                      </h3>

                      {/* MetaCrtic Score */}
                      <ReactStars
                        className='imdbStars'
                        count={ 5 }
                        color1={ '#ECE9E6' }
                        value={ +movie.imdbRating / 2 }
                        size={ 24 }
                        edit={ false }
                        color2={ '#ffd700' }
                      />
                    </div>

                    <p className='plot'>{ movie.Plot }</p>

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
