const LOAD_PROTUCTS_BY_CATEGORY = 'LOAD_PROTUCTS_BY_CATEGORY';

export const loadProductsByCategoryAction = productsByCategory => ({ type: LOAD_PROTUCTS_BY_CATEGORY, payload: productsByCategory});

export const productsByCategoryReducer = (state={}, action) => {
    if(action.type === LOAD_PROTUCTS_BY_CATEGORY){
        return action.payload
    }
    return state
}