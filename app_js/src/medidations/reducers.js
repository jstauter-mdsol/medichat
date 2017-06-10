import {
  MEDIDATIONS_LOADED,
  MEDIDATIONS_LOADING
} from './actions';

const defaultMedidations = {
  loading: false,
  items: []
};

export const medidations = (state = defaultMedidations, action) => {
  switch (action.type) {
    case MEDIDATIONS_LOADED: return {loading: false, items: action.payload};
    case MEDIDATIONS_LOADING: return {loading: true, items: state.items};
    default: return state;
  }
};
