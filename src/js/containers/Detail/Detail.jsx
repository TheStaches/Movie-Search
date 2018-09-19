import React from 'react';

class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { searchQuery } = this.props;
    const movie = searchQuery.filter(item =>
      item.imdbID === this.props.location.pathname.match(/tt.+/)[0]
    )[0];
      console.log(movie);
    return (
      movie ?
        <div className='movieDetail'>
          <div className='row'>
            <div className='col-5'>
              <img className='poster' alt='Poster' src={ movie.Poster !== 'N/A' ? movie.Poster : 'http://story-one.com/wp-content/uploads/2016/02/Poster_Not_Available2.jpg' } />
            </div>
            <div className='col-7'>
              <div className='card'>
                <div className='card-body'>
                  <h5 className='title'>{movie.Title}</h5>

                  {/* span */}
                  <div className='spanTags'>
                    <span>{movie.Genre}</span>
                    <span>{movie.Runtime}</span>
                    <span>{movie.Language}</span>
                  </div>

                  {/* body info */}
                  <p>{movie.Plot}</p>

                  <p>Director: <span className='bodyInfo'>{movie.Director}</span></p>
                  <p>Writer: <span className='bodyInfo'>{movie.Writer}</span></p>
                  <p>Actors: <span className='bodyInfo'>{movie.Actors}</span></p>
                  <p>Language: <span className='bodyInfo'>{movie.Language}</span></p>
                  <p className='lastBody'>Awards: <span className='bodyInfo'>{movie.Awards}</span></p>

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
                </div>
              </div>
            </div>
          </div>
        </div> : <span />
    );
  }
}

export default MovieDetailContainer;
