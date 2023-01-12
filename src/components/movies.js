import React, { Component } from 'react';
import { getMovies } from "./fake_movies";
import './movies.css'

class Movies extends Component{

    state = {
        movies: getMovies()
    }

    allMovies(){
        return this.state.movies.map(movie => <tr onClick={this.deleteMovies.bind(this, movie)}>
            <td className='movieId'>{movie._id}</td>
            <td>{movie.title}</td>
            <td>{movie.genre._id}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            </tr>
            )
    }
    deleteMovies(movie){
        const movies = this.state.movies.filter(i => i._id !== movie._id)
        this.setState({movies})
    }
    
    meter(movies){
        const moviesCount = movies.length;

        return(
            <p>{moviesCount}</p>
        )

    }

    //Show movies from {this.state.movies[0].title}

    render(){
        return (
            <table>
                <>{this.meter(this.state.movies)}</>
                <>{this.allMovies()}</>
            </table>
        )
    }
}

export default Movies ;