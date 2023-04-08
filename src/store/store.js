import {createSlice,configureStore} from '@reduxjs/toolkit'


const moviesSlice =createSlice({
    initialState:{movies:null,loading:false,error:null,tvShows:null},
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