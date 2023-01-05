import React, { Component } from 'react';
import { getMovies } from "./fake_movies";

class Movies extends Component{

    state = {
        movies: getMovies()
    }

    allMovies(){
        return this.state.movies.map(movie => <p>{movie.title}</p>)
    }

    //Show movies from {this.state.movies[0].title}

    render(){

        return (
            <>
                <p>{this.allMovies()}</p>
            </>
        )
    }
}

export default Movies ;