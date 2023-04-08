import axios from 'axios'
import {movieAction} from '../store'


export const getMovieList = () => {
    return async (dispatch) => {

        try{

            
            const {data} = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=101f6b0d3f203bb147a789c4b2f8345d&language=en-US&page=1')

            dispatch(movieAction(data?.results))
            
        }catch(error){
            console.log(error)
        }

          
    }
}