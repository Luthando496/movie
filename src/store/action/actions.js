import axios from 'axios'
import {movieAction} from '../store'


export const getMovieListLatest = () => {
    return async (dispatch) => {

        try{

            dispatch(movieAction.fetchMoviesRequest())

            
            const {data} = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=101f6b0d3f203bb147a789c4b2f8345d&language=en-US&page=1')

            dispatch(movieAction.fetchMoviesSuccess(data))
            
        }catch(error){
            console.log(error)
        }

          
    }
}


export const getTVListLatest = () => {
    return async (dispatch) => {

        try{

            dispatch(movieAction.fetchTVRequest())

            
            const {data} = await axios.get('https://api.themoviedb.org/3/tv/popular?api_key=101f6b0d3f203bb147a789c4b2f8345d&language=en-US&page=1')

            dispatch(movieAction.fetchTVSuccess(data))
            
        }catch(error){
            console.log(error)
        }

          
    }
}


export const fetchSingleMovie = (id) => {
    return async (dispatch) => {

        try{

            dispatch(movieAction.fetchMoviesRequest())

            
            const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=101f6b0d3f203bb147a789c4b2f8345d&language=en-US`)

            dispatch(movieAction.fetchSingleMovie(data))
            
        }catch(error){
            console.log(error)
        }

          
    }
}


export const fetchSingleTV = (id) => {
    return async (dispatch) => {

        try{

            dispatch(movieAction.fetchMoviesRequest())

            
            const {data} = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=101f6b0d3f203bb147a789c4b2f8345d&language=en-US`)

            dispatch(movieAction.fetchSingleMovie(data))
            
        }catch(error){
            console.log(error)
        }

          
    }
}


export const getRelatedMovies = (id) => {
    return async (dispatch) => {

        try{

            dispatch(movieAction.getRelatedRequest())

            
            const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=101f6b0d3f203bb147a789c4b2f8345d&language=en-US&page=1`)

            dispatch(movieAction.getRelated(data))
            
        }catch(error){
            console.log(error)
        }

          
    }
}



export const searchMovies = (search) => {
    return async (dispatch) => {

        try{

            dispatch(movieAction.fetchMoviesRequest())

            
            const {data} = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=101f6b0d3f203bb147a789c4b2f8345d&language=en-US&page=1&include_adult=false`)

            dispatch(movieAction.fetchMoviesSuccess(data))
            
        }catch(error){
            console.log(error)
        }

          
    }
}


export const searchTVShows= (search) => {
    return async (dispatch) => {

        try{

            dispatch(movieAction.fetchTVRequest())

            
            const {data} = await axios.get(`https://api.themoviedb.org/3/search/tv?query=${search}&api_key=101f6b0d3f203bb147a789c4b2f8345d&language=en-US&page=1&include_adult=false`)

            dispatch(movieAction.fetchTVSuccess(data))
            
        }catch(error){
            console.log(error)
        }

          
    }
}