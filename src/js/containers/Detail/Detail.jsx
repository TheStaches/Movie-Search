import React from 'react';

class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { searchQuery } = this.props;
    const movieArr = searchQuery.filter((item) => 
      item.imdbID === this.props.location.pathname.match(/tt.+/)[0]
    );

    return (
      (movieArr[0]) ?
        <div className='movieDetail'>
          <div className='row'>
            <div className='col-5'>
              <img alt='poster 'src={ movieArr[0].Poster } />
            </div>
            <div className='col-7'>
              <div className='card'>
                <div className='card-header'>Movie Details</div>
                <div className='card-body'>
                  <h5 id='title'>{movieArr[0].Title}</h5>
                  <div className='spanTags'>
                    <span>Released {movieArr[0].Year}</span>
                    <span>{movieArr[0].Runtime}</span>
                    <span>{movieArr[0].Genre}</span>
                  </div>
                  <p>{movieArr[0].Plot}</p>
                  <p>{movieArr[0].Awards}</p>
                  <span className='score'>Metascore: {movieArr[0].Metascore}</span>
                  <span className='score'>IMDB: {movieArr[0].imdbRating}</span>
                </div>
              </div>
            </div>
          </div>
        </div> : <span />
    );
  }
}

export default MovieDetailContainer;
