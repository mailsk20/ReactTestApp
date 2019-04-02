import {FETCH_LIST, PRODUCT_DETAIL} from '../actions/types';

export default (state=[],action)=>{
    switch(action.type){
        case FETCH_LIST:
            return action.payload;
        case PRODUCT_DETAIL:
            const product = state.filter(x => x.id == action.payload);
            return product;
        default:
            return state;
    }
}