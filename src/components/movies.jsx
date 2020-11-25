// import React, { Component } from 'react';
// import Like from './common/like';
// import { getMovies } from '../services/fakeMovieService';

// class Movies extends Component {
//   state = {
//     movies: getMovies(),
//   };

//   handleDelete = (movie) => {
//     // console.log(movie);

//     // filter returns a new array with the passed condition(ie the condition which satisfy)
//     const movies = this.state.movies.filter((m) => m._id !== movie._id);
//     this.setState({ movies });
//   };

//   handleLike = (movie) => {
//     // here parameter 'movie' is the clicked movie(object) (ie on like button)
//     const movies = [...this.state.movies];
//     const index = movies.indexOf(movie);
//     movies[index] = { ...movies[index] };
//     movies[index].liked = !movies[index].liked;
//     this.setState({ movies });
//   };

//   render() {
//     const { length: count } = this.state.movies;
//     if (count === 0) return <p>There are no movies in the database!</p>;
//     return (
//       <React.Fragment>
//         <p>Showing the {count} movies in the database</p>
//         <table className="table">
//           <thead>
//             <tr>
//               <th>Title</th>
//               <th>Genre</th>
//               <th>Stock</th>
//               <th>Rate</th>
//               <th />
//               <th />
//             </tr>
//           </thead>
//           <tbody>
//             {this.state.movies.map((movie) => (
//               <tr key={movie._id}>
//                 <td>{movie.title}</td>
//                 <td>{movie.genre.name}</td>
//                 <td>{movie.numberInStock}</td>
//                 <td>{movie.dailyRentalRate}</td>
//                 <td>
//                   <Like
//                     liked={movie.liked}
//                     onClick={() => this.handleLike(movie)}
//                   />
//                 </td>
//                 <td>
//                   <button
//                     onClick={() => this.handleDelete(movie)}
//                     className="btn btn-danger btn-sm"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </React.Fragment>
//     );
//   }
// }

// export default Movies;

// // < ----- Pagination Filtering and Sorting ----- >

// // < ----- Pagination ----- >

// import React, { Component } from 'react';
// import Like from './common/like';
// import Pagination from './common/pagination';
// import { getMovies } from '../services/fakeMovieService';
// import { paginate } from '../utils/paginate';

// class Movies extends Component {
//   state = {
//     movies: getMovies(),
//     currentPage: 1,
//     pageSize: 4,
//   };

//   handleDelete = (movie) => {
//     // console.log(movie);

//     // filter returns a new array with the passed condition(ie the condition which satisfy)
//     const movies = this.state.movies.filter((m) => m._id !== movie._id);
//     this.setState({ movies });
//   };

//   handleLike = (movie) => {
//     // here parameter 'movie' is the clicked movie(object) (ie on like button)
//     const movies = [...this.state.movies];
//     const index = movies.indexOf(movie);
//     movies[index] = { ...movies[index] };
//     movies[index].liked = !movies[index].liked;
//     this.setState({ movies });
//   };

//   handlePageChange = (page) => {
//     this.setState({ currentPage: page });
//   };

//   render() {
//     const { length: count } = this.state.movies;
//     const { pageSize, currentPage, movies: allMovies } = this.state;
//     if (count === 0) return <p>There are no movies in the database!</p>;

//     const movies = paginate(allMovies, currentPage, pageSize);

//     return (
//       <React.Fragment>
//         <p>Showing the {count} movies in the database</p>
//         <table className="table">
//           <thead>
//             <tr>
//               <th>Title</th>
//               <th>Genre</th>
//               <th>Stock</th>
//               <th>Rate</th>
//               <th />
//               <th />
//             </tr>
//           </thead>
//           <tbody>
//             {movies.map((movie) => (
//               <tr key={movie._id}>
//                 <td>{movie.title}</td>
//                 <td>{movie.genre.name}</td>
//                 <td>{movie.numberInStock}</td>
//                 <td>{movie.dailyRentalRate}</td>
//                 <td>
//                   <Like
//                     liked={movie.liked}
//                     onClick={() => this.handleLike(movie)}
//                   />
//                 </td>
//                 <td>
//                   <button
//                     onClick={() => this.handleDelete(movie)}
//                     className="btn btn-danger btn-sm"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <Pagination
//           itemsCount={count}
//           pageSize={pageSize}
//           currentPage={currentPage}
//           onPageChange={this.handlePageChange}
//         />
//       </React.Fragment>
//     );
//   }
// }

// export default Movies;

// // < ----- Filtering ----- >

// import React, { Component } from 'react';
// import Like from './common/like';
// import ListGroup from './common/listGroup';
// import Pagination from './common/pagination';
// import { getMovies } from '../services/fakeMovieService';
// import { getGenres } from '../services/fakeGenreService';
// import { paginate } from '../utils/paginate';

// class Movies extends Component {
//   state = {
//     // these properties are initialised to empty array because
//     // it's going to take some time until we get the data from the server,
//     // during this time we make sure that 'movies' and 'genres' are not undefined
//     // otherwise we will get a runtime error
//     movies: [],
//     genres: [],
//     currentPage: 1,
//     pageSize: 4,
//   };
//   // this method will be called when an instance of this component is rendered in the DOM
//   componentDidMount() {
//     const genres = [{ name: 'All Genres' }, ...getGenres()];
//     this.setState({ movies: getMovies(), genres });
//   }

//   handleDelete = (movie) => {
//     // console.log(movie);

//     // filter returns a new array with the passed condition(ie the condition which satisfy)
//     const movies = this.state.movies.filter((m) => m._id !== movie._id);
//     this.setState({ movies });
//   };

//   handleLike = (movie) => {
//     // here parameter 'movie' is the clicked movie(object) (ie on like button)
//     const movies = [...this.state.movies];
//     const index = movies.indexOf(movie);
//     movies[index] = { ...movies[index] };
//     movies[index].liked = !movies[index].liked;
//     this.setState({ movies });
//   };

//   handlePageChange = (page) => {
//     this.setState({ currentPage: page });
//   };

//   handleGenreSelect = (genre) => {
//     // {_id: "5b21ca3eeb7f6fbccd471818", name: "Action"}
//     // console.log(genre);

//     this.setState({ selectedGenre: genre, currentPage: 1 });
//   };

//   render() {
//     const { length: count } = this.state.movies;
//     const {
//       pageSize,
//       currentPage,
//       selectedGenre,
//       movies: allMovies,
//     } = this.state;
//     if (count === 0) return <p>There are no movies in the database!</p>;

//     // (selectedGenre && selectedGenre._id) both are selected because
//     // without 'selectedGenre._id' 'All Genres' will show 0 movies,
//     // because 'All Genres' have no id, so we use && to filter out only those
//     // which have satisfied both condition
//     const filtered =
//       selectedGenre && selectedGenre._id
//         ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
//         : allMovies;

//     const movies = paginate(filtered, currentPage, pageSize);

//     return (
//       <div className="row">
//         <div className="col-3">
//           <ListGroup
//             items={this.state.genres}
//             selectedItem={this.state.selectedGenre}
//             onItemSelect={this.handleGenreSelect}
//           />
//         </div>
//         <div className="col">
//           <p>Showing the {filtered.length} movies in the database</p>
//           <table className="table">
//             <thead>
//               <tr>
//                 <th>Title</th>
//                 <th>Genre</th>
//                 <th>Stock</th>
//                 <th>Rate</th>
//                 <th />
//                 <th />
//               </tr>
//             </thead>
//             <tbody>
//               {movies.map((movie) => (
//                 <tr key={movie._id}>
//                   <td>{movie.title}</td>
//                   <td>{movie.genre.name}</td>
//                   <td>{movie.numberInStock}</td>
//                   <td>{movie.dailyRentalRate}</td>
//                   <td>
//                     <Like
//                       liked={movie.liked}
//                       onClick={() => this.handleLike(movie)}
//                     />
//                   </td>
//                   <td>
//                     <button
//                       onClick={() => this.handleDelete(movie)}
//                       className="btn btn-danger btn-sm"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <Pagination
//             itemsCount={filtered.length}
//             pageSize={pageSize}
//             currentPage={currentPage}
//             onPageChange={this.handlePageChange}
//           />
//         </div>
//       </div>
//     );
//   }
// }

// export default Movies;

// < ----- Sorting ----- >

import React, { Component } from 'react';
import MoviesTable from './moviesTable';
import ListGroup from './common/listGroup';
import Pagination from './common/pagination';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import { paginate } from '../utils/paginate';

class Movies extends Component {
  state = {
    // these properties are initialised to empty array because
    // it's going to take some time until we get the data from the server,
    // during this time we make sure that 'movies' and 'genres' are not undefined
    // otherwise we will get a runtime error
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
  };
  // this method will be called when an instance of this component is rendered in the DOM
  componentDidMount() {
    const genres = [{ name: 'All Genres' }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = (movie) => {
    // console.log(movie);

    // filter returns a new array with the passed condition(ie the condition which satisfy)
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    // here parameter 'movie' is the clicked movie(object) (ie on like button)
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    // {_id: "5b21ca3eeb7f6fbccd471818", name: "Action"}
    // console.log(genre);

    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  render() {
    const { length: count } = this.state.movies;
    const {
      pageSize,
      currentPage,
      selectedGenre,
      movies: allMovies,
    } = this.state;
    if (count === 0) return <p>There are no movies in the database!</p>;

    // (selectedGenre && selectedGenre._id) both are selected because
    // without 'selectedGenre._id' 'All Genres' will show 0 movies,
    // because 'All Genres' have no id, so we use && to filter out only those
    // which have satisfied both condition
    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;

    const movies = paginate(filtered, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          <p>Showing the {filtered.length} movies in the database</p>
          <MoviesTable
            movies={movies}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
          />
          <Pagination
            itemsCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
