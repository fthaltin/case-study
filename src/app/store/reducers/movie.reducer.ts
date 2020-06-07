import { Movie } from './../../service/model/movie.model';
import { CHANGE_FILTER_TYPE, ADD_MOVIE, GET_FROM_STORAGE, REMOVE_MOVIE, CHANGE_SORTING_TYPE } from './../actions/movie.actions';


export interface MovieStore {
  filterType: string;
  sortingType: string;
  movieList: Movie[]
}

const INITIAL_STATE: MovieStore = {
  filterType: 'all',
  sortingType: '',
  movieList: []
}

export function movieReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_FILTER_TYPE:
      return { ...state, filterType: action.payload }

    case CHANGE_SORTING_TYPE:
      return { ...state, sortingType: action.payload }

    case GET_FROM_STORAGE:
      return {...state, movieList: [...state.movieList, ...action.payload]}

    case ADD_MOVIE:
      const movieList = [...state.movieList, action.payload];
      localStorage.setItem('movieList', JSON.stringify(movieList));
      return { ...state, movieList: movieList }

    case REMOVE_MOVIE:
      const movies = [...state.movieList.filter(item => item.id != action.payload)];
      localStorage.setItem('movieList', JSON.stringify(movies));
      return { ...state, movieList: movies }
  
    default:
      return state;
  }
}



