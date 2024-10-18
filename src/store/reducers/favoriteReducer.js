const ADD_PRODUCT_TO_FAVORITE = 'ADD_PRODUCT_TO_FAVORITE';
const DELETE_PRODUCT_FROM_FAVORITE = 'DELETE_PRODUCT_FROM_FAVORITE';
const DELETE_ALL_FAVORITE = 'DELETE_ALL_FAVORITE';

export const addProductToFavoriteAction = product => ({ type: ADD_PRODUCT_TO_FAVORITE, payload: product });
export const deleteProductFromFavoriteAction = product_id => ({ type: DELETE_PRODUCT_FROM_FAVORITE, payload: product_id});
export const delteAllFavorite = () => ({ type: DELETE_ALL_FAVORITE});

const checkProduct = (state, payload) => {
    const target = state.find(elem => elem.id === payload.id);

    if(target) {
        target.count++;
        return [...state]
    } else {
        return [...state, {...payload, count: 1}]
    }
}
export const favoriteReducer = (state=[], action) => {
    if(action.type === ADD_PRODUCT_TO_FAVORITE){
        return checkProduct(state, action.payload)
    } else if (action.type === DELETE_PRODUCT_FROM_FAVORITE){
        return state.filter(elem => elem.id !== action.payload)
    } else if (action.type === DELETE_ALL_FAVORITE){
        return []
    }
    return state
}