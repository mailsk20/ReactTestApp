import {FETCH_LIST , PRODUCT_DETAIL} from './types';
import api from '../apis/api';

export const FetchList = (request)=> async (dispatch,getState)=>{

    await dispatch(fetchProducts());

    // return {
    //     type:FETCH_LIST,
    //     payload:request
    // }
}

export const fetchProducts = () => async (dispatch, getState)=>{
    const response = await api.get('./list'); 
    dispatch({type:FETCH_LIST, payload: response.data.data });
};




// export const FetchProductListSuccess = ()=>{
//     return {
//         type:FETCH_LIST_SUCCESS
//     }
// }

export const productDetailAction = (id)=>{
    console.log('id',id);
    return {
        type:PRODUCT_DETAIL,
        payload:id
    }
}