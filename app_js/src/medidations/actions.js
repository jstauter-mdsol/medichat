import axios from 'axios';

export const MEDIDATIONS_LOADED = 'MEDIDATIONS_LOADED';
export const MEDIDATIONS_LOADING = 'MEDIDATIONS_LOADING';

export function medidationsLoading (medidations) {
  return {
    type: MEDIDATIONS_LOADING
  };
}

export function medidationsLoaded (medidations) {
  return {
    type: MEDIDATIONS_LOADED,
    payload: medidations
  };
}

export const loadMedidations = () => async dispatch => {
  dispatch(medidationsLoading());
  let response = await axios.get('//localhost:4000/medidations?_expand=title');
  dispatch(medidationsLoaded(response.data));
};
