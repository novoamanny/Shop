import axios from 'axios';

import {GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAIL} from './types';

const config = {
    headers: {
        'Content-Type': 'application/json'
    },
}

export const getRates = () => async dispatch =>{

    const body = JSON.stringify({ ZipCode: '75217'});
    

    try {
        const res = await axios.post(`https://thppreview.herokuapp.com/api/pulse/rates/get/rates/`, body, config);

          
        dispatch({
          type: GET_PRODUCTS_SUCCESS,
          payload: res.data
        });
     
      } catch (err) {
  
        const errors = err.response.data.errors;
        
        if (err) {
          // errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: GET_PRODUCTS_FAIL,
            
          });

      }
}
