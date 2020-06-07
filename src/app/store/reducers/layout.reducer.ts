import { CHANGE_THEME_MODE } from './../actions/layout.actions';


export interface LayoutStore {
  theme: string;
}

const INITIAL_STATE: LayoutStore = {
  theme: 'primary',
}

export function layoutReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_THEME_MODE:
      return {...state, theme: action.payload}
  
    default:
      return state;
  }
}



