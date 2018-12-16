import React, { Component } from 'react';
import './App.css';

// Component imports
import AppHeader from '../../components/AppHeader/AppHeader';
import AppSearch from '../../components/AppSearch/AppSearch';
import Movies from '../../components/Movies/Movies';
import AppFooter from '../../components/AppFooter/AppFooter';

//Library imports
import $ from 'jquery';

class App extends Component {
  // Statefull component
  state = {
    movies: [],
    searchQuery: null,
    foundMovies: false,
    totalResults: 0,
    currentPage: 1,
    totalPages: 0

  }

  searchMovieDB = (key, page) => {
    if (key.length === 0) {
      this.setState({
        foundMovies: false,
        totalResults: 0,
        currentPage: 1,
        totalPages: 0
      })
    } else {
      const searchURL = "https://api.themoviedb.org/3/search/movie?api_key=7751227fa3f05ae8dc774a8ccccc3071&language=en-US&query=" + key + "&page=" + page;

      $.ajax({
        url: searchURL,
        success: (data) => {
          if (data.results.length > 0) {
            let moviesFetched = [];

            data.results.forEach((movie) => {
              moviesFetched.push(movie);
            });

            this.setState({
              movies: moviesFetched,
              searchQuery: key,
              foundMovies: true,
              totalResults: data.total_results,
              currentPage: data.page,
              totalPages: data.total_pages
            });

          } else {
            this.setState({
              foundMovies: false,
              totalResults: 0,
              currentPage: 1,
              totalPages: 0
            })
          }
        },
        error: (error) => {
          this.setState({
            foundMovies: false,
            totalResults: 0,
            currentPage: 1,
            totalPages: 0
          })
        }
      });

    }
  }


  //Page change handler
  nextPageHandler = () => {
    let pageCurrent = this.state.currentPage;
    let pageTotal = this.state.totalPages;

    if (pageCurrent < pageTotal) {
      this.searchMovieDB(this.state.searchQuery, ++pageCurrent);
    }
  }

  prevPageHandler = () => {
    let pageCurrent = this.state.currentPage;

    if (pageCurrent > 1) {
      this.searchMovieDB(this.state.searchQuery, --pageCurrent);
    }
  }


  render() {

    //Rendering moviews in DOM
    let moviesInDOM = null;
    if (this.state.foundMovies) {
      moviesInDOM = this.state.movies.map((movie, index) => {
        return <Movies
          key={index}
          id={movie.id}
          name={movie.title}
          desc={movie.overview}
          poster={movie.poster_path}
          releaseDate={movie.release_date}
          rating={movie.vote_average} />
      });
    } else {
      moviesInDOM = <div className="No-Result-Found">No movies to display...</div>
    }

    return (
      <div className="App">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <AppHeader title="The Movie DB" />
        <AppSearch
          search={this.searchMovieDB} />
        <div className="Area-Row">
          {moviesInDOM}
        </div>
        <AppFooter
          resultCount={this.state.totalResults}
          currentPage={this.state.currentPage}
          totalPage={this.state.totalPages}
          onPageNext={this.nextPageHandler}
          onPagePrev={this.prevPageHandler} />
      </div>
    );
  }
}

export default App;
