import {createSlice,configureStore} from '@reduxjs/toolkit'


const moviesSlice =createSlice({
    initialState:{movies:[],loading:false,error:null,tvShows:null,single:null},
    name:'movies',
    reducers:{
        fetchMoviesRequest(state){
            state.loading = true;
        },
        fetchMoviesSuccess(state,action){
            state.movies = action.payload;
            state.loading = false;
        },
        fetchMoviesFailure(state,action){
            state.error = action.payload;
            state.loading = false;
        },
        fetchTVRequest(state){
            state.loading = true;
        },
        fetchTVSuccess(state,action){
            state.tvShows = action.payload;
            state.loading = false;
        },
        fetchTVFailure(state,action){
            state.error = action.payload;
            state.loading = false;
        },
        fetchSingleMovie(state,action){
            state.single = action.payload;
            state.loading = false;
        },
        fetchSingleMovieFailure(state,action){
            state.error = action.payload;
            state.loading = false;
        }
    }
});


export const movieAction = moviesSlice.actions

const store = configureStore({
    reducer:{
    movie:moviesSlice.reducer
}
})


export default store;