import React from 'react';
import { Link } from 'react-router-dom';


class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { searchQuery, moreInfo } = this.props;

    return (
      moreInfo ?
        <div className='movieDetail'>
          <div className='row'>
            <div className='col-5'>
              <img className='poster' alt='Poster' src={ moreInfo.Poster !== 'N/A' ? moreInfo.Poster : 'http://story-one.com/wp-content/uploads/2016/02/Poster_Not_Available2.jpg' } />

            </div>
            <div className='col-7'>
              <div className='card'>
                <div className='card-body'>
                  <h5 className='title'>{moreInfo.Title}</h5>

                  {/* Certified Fresh */}
                  {
                    (moreInfo.Ratings[1] && +moreInfo.Ratings[1].Value.slice(0, 2) > 75) ?
                      <img className='tomato flexIcon' alt='tomato' src='https://www.rottentomatoes.com//assets/pizza-pie/images/icons/global/cf-lg.3c29eff04f2.png' />
                      : <span />
                  }

                  {/* span */}
                  <div className='spanTags'>
                    <span>{moreInfo.Genre}</span>
                    <span>{moreInfo.Runtime}</span>
                    <span>{moreInfo.Language}</span>
                  </div>

                  {/* body info */}
                  <div className='detailInfo'>
                    <p>Plot: <span className='bodyInfo'>{moreInfo.Plot}</span></p>
                    <p>Director: <span className='bodyInfo'>{moreInfo.Director}</span></p>
                    <p>Writer: <span className='bodyInfo'>{moreInfo.Writer}</span></p>
                    <p>Actors: <span className='bodyInfo'>{moreInfo.Actors}</span></p>
                    <p>Language: <span className='bodyInfo'>{moreInfo.Language}</span></p>
                    <p className='lastBody'>Awards: <span className='bodyInfo'>{moreInfo.Awards}</span></p>
                  </div>

                  <div className='icons'>
                      
                    {/* IMDb Button */}
                    <a href={ `https://www.imdb.com/title/${moreInfo.imdbID}/` } target='_blank' className='flexIcon'>
                      <img className='imdb' alt='IMDb' src='https://ia.media-imdb.com/images/M/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@._V1_.png' />
                    </a>

                    {/* Short-circuit Operators */}
                    { moreInfo.Metascore > 60 && <div className='metaCritic flexIcon green'>{ moreInfo.Metascore }</div> }
                    { (moreInfo.Metascore <= 60 && moreInfo.Metascore >= 40) && <div className='metaCritic flexIcon yellow'>{ moreInfo.Metascore }</div> }
                    { moreInfo.Metascore < 40 && <div className='metaCritic flexIcon red'>{ moreInfo.Metascore }</div> }
                    { moreInfo.Metascore === 'N/A' && <div className='metaCritic flexIcon black'>{ moreInfo.Metascore }</div> }

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
