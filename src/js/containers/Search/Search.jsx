import React from 'react';
import { Link } from 'react-router-dom';


import {
  updateSearchInput,
  searchMovie,
} from './searchActions';

class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSearchMovie = this.handleSearchMovie.bind(this);
  }

  handleSearchInput(event) {
    const { dispatch } = this.props;
    dispatch(updateSearchInput(event.target.value));
  }

  handleSearchMovie(event) {
    const {dispatch, movieInput} = this.props;
    if (event.key === 'Enter' || event.target.value === 'button') {
      dispatch(searchMovie(movieInput));
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
          {/* <div className='input-group-append'>
            <button
              className='btn btn-outline-dark'
              id='search'
              value='button'
              onClick={ this.handleSearchMovie }
              onKeyDown={ this.handleSearchMovie }
            >Go!</button>
          </div> */}
        </div>

        {
          (searchQuery) ?
            searchQuery.sort((a, b) => b.Year.match(/\d+/).join('') - a.Year.match(/\d+/).join('')).map((movie, index) => (
              (
                <div className='row' key={ index }>
                  <div className='col-3'>
                    <img className='poster' alt='Poster' src={ movie.Poster ? movie.Poster : 'http://media1.myfolio.com/users/getrnd/images/mkay4a6gy1.jpg' } />
                  </div>
                  <div className='col-9'>
                    <h2 className='movieTitle'>{ movie.Title }</h2>
                    <h3 className='movieYear'>({ movie.Year })</h3>
                    <p className='plot'>{ movie.Plot }</p>
                    <p>Rating: <span className='secondary'>{ movie.Rated }</span></p>
                    <p>Runtime: <span className='secondary'>{ movie.Runtime }</span></p>
                    
                    <div className='icons'>
                      
                      {/* IMDb Button */}
                      <a href={ `https://www.imdb.com/title/${movie.imdbID}/` } className='flexIcon'>
                        <img className='imdb' alt='IMDb' src='https://ia.media-imdb.com/images/M/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@._V1_.png' />
                      </a>

                      {/* Short-circuit Operators */}
                      { movie.Metascore > 60 && <div className='metaCritic flexIcon green'>{ movie.Metascore }</div> }
                      { (movie.Metascore <= 60 && movie.Metascore >= 40) && <div className='metaCritic flexIcon yellow'>{ movie.Metascore }</div> }
                      { movie.Metascore < 40 && <div className='metaCritic flexIcon red'>{ movie.Metascore }</div> }
                      { movie.Metascore === 'N/A' && <div className='metaCritic flexIcon black'>{ movie.Metascore }</div> }
                      
                      {/* imdb  Rating*/}
                      {/* <div className='imdb'>
                        {
                          (+movie.imdbRating) ?
                            <img alt='imdb Rating' src={imdbStar} /> :
                            <span />
                        }
                      </div> */}

                      {/* Certified Fresh */}
                      {
                        (movie.Ratings[1] && +movie.Ratings[1].Value.slice(0, 2) > 75) ?
                          <img className='tomato flexIcon' alt='tomato' src='https://www.rottentomatoes.com//assets/pizza-pie/images/icons/global/cf-lg.3c29eff04f2.png' />
                          : <span />
                      }

                    </div>
                    <Link
                      to={ `/movie/${movie.imdbID}` }
                      className='btn btn-outline-primary moreInfo'
                    >
                    More Information
                    </Link>
                  </div>
                </div>
              )
            )) : <h1>Sorry No Results Found.</h1>
        }
      </div>
    );
  }
}

export default MovieSearchContainer;
