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