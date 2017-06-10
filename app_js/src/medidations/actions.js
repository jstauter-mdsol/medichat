import axios from 'axios';

export const MEDIDATIONS_LOADED = 'MEDIDATIONS_LOADED';
export const MEDIDATIONS_LOADING = 'MEDIDATIONS_LOADING';

export function medidatationsLoading (medidatations) {
  return {
    type: MEDIDATIONS_LOADING
  };
}

export function medidatationsLoaded (medidatations) {
  return {
    type: MEDIDATIONS_LOADED,
    payload: medidatations
  };
}

export const loadMedidations = () => dispatch => {
  dispatch(medidatationsLoading());
  axios.get('//localhost:4000/medidatations?_expand=title').then(response => {
    dispatch(medidatationsLoaded(response.data));
  });
};
