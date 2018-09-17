import React from 'react';

class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { searchQuery } = this.props;
    let movieArr = searchQuery.filter(item => {
      return item.imdbID == this.props.location.pathname.match(/tt.+/)[0];
    });
    console.log(this.props.location.pathname.match(/tt.+/)[0])
    console.log(searchQuery)

    return (
      (movieArr[0]) ?
        <div className='movieDetail'>
        <h1>Movie Finder</h1>
        <div className='row'>
          <div className='col-5'>
            <img src={movieArr[0].Poster}></img>
          </div>
          <div className='col-7'>
            <div className='card'>
              <div className='card-header'>Movie Details</div>
              <div className='card-body'>
                <h5>{movieArr[0].Title}</h5>
                <div className='spanTags'>
                  <span>Released {movieArr[0].Year}</span><span>{movieArr[0].Runtime}</span><span>{movieArr[0].Genre}</span>
                </div>
                <p>{movieArr[0].Plot}</p>
                <p>{movieArr[0].Awards}</p>
                <span className='score'>Metascore: {movieArr[0].Metascore}</span>
                <span className='score'>IMDB: {movieArr[0].imdbRating}</span>
              </div>
            </div>
          </div>
        </div>
      </div> : <span></span>
    );
  }
}

export default MovieDetailContainer;


