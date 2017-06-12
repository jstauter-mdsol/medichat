import {
  MEDIDATIONS_LOADED,
  MEDIDATIONS_LOADING
} from './actions';

const defaultMedidations = {
  loading: false,
  loaded: false,
  items: []
};

export const medidations = (state = defaultMedidations, action) => {
  switch (action.type) {
    case MEDIDATIONS_LOADED: return {loading: false, loaded: true, items: action.payload};
    case MEDIDATIONS_LOADING: return Object.assign({}, state, {loading: true});
    default: return state;
  }
};
