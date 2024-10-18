const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
const DELETE_PRODUCT_FROM_CART = 'DELETE_PRODUCT_FROM_CART';
const DECREMENT_COUNT = 'DECREMENT_COUNT';
const INCREMENT_COUNT = 'INCREMENT_COUNT';
const DELETE_ALL = 'DELETE_ALL';

export const addProductToCartAction = product => ({ type: ADD_PRODUCT_TO_CART, payload: product });
export const deleteProductFromCartAction = product_id => ({ type: DELETE_PRODUCT_FROM_CART, payload: product_id });
export const decrementCountAction = product_id => ({ type: DECREMENT_COUNT, payload: product_id });
export const incrementCountAction = product_id => ({ type: INCREMENT_COUNT, payload: product_id });
export const deleteAllAction = () => ({ type: DELETE_ALL });

const checkProduct = (state, payload) => {
    const target = state.find(el => el.id === payload.id);

    if(target) {
        target.count++;
        return [...state]
    } else {
        return [...state, {...payload, count: 1}]
    }
}

export const cartReducer = (state=[], action) => {
    if(action.type === ADD_PRODUCT_TO_CART){
        return checkProduct(state, action.payload)
    } else if (action.type === DELETE_PRODUCT_FROM_CART){
        return state.filter(elem => elem.id !== action.payload)
    } else if (action.type === INCREMENT_COUNT){
        state.find(elem => elem.id === action.payload).count++
        return [...state]
    } else if (action.type === DECREMENT_COUNT){
        const target = state.find(elem => elem.id === action.payload);
        if(target.count > 1) {
            target.count--;
            return [...state]
        } else {
            return state.filter(elem => elem.id !== action.payload)
        }
    } else if (action.type === DELETE_ALL){
        return []
    }
    return state
}