const ADD_PRODUCT_TO_FAVORITE = 'ADD_PRODUCT_TO_FAVORITE';
const DELETE_PRODUCT_FROM_FAVORITE = 'DELETE_PRODUCT_FROM_FAVORITE';
const DELETE_ALL_FAVORITE = 'DELETE_ALL_FAVORITE';
const SORT_ALL_FAVORITE = 'SORT_ALL_FAVORITE';
const GET_DISCOUNT_FAVORITE = 'GET_DISCOUNT_FAVORITE';
const SORT_BY_PRICE_FAVORITE = 'SORT_BY_PRICE_FAVORITE';

export const addProductToFavoriteAction = product => ({ type: ADD_PRODUCT_TO_FAVORITE, payload: product });
export const deleteProductFromFavoriteAction = product_id => ({ type: DELETE_PRODUCT_FROM_FAVORITE, payload: product_id});
export const delteAllFavorite = () => ({ type: DELETE_ALL_FAVORITE});

export const sortAllFavoriteAction = option_value => ({
    type: SORT_ALL_FAVORITE,
    payload: option_value
});

export const sortByPriceFavoriteAction = values => ({
    type: SORT_BY_PRICE_FAVORITE,
    payload: values
});
export const getDiscountFavoriteAction = value => ({
    type: GET_DISCOUNT_FAVORITE,
    payload: value
});
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
    } else if (action.type === SORT_ALL_FAVORITE) 
        {
        if(action.payload === 'default') 
        {     
            state.sort((a, b) => a.id - b.id)
        } 
        else if(action.payload === 'price_asc') 
        {     
            state.sort((a, b) => a.price - b.price)
        }  
        else if (action.payload === 'price_desc')
        {
            state.sort((a, b) => b.price - a.price)
        } 
        else if (action.payload === 'title')
        {
            state.sort((a, b) => a.title.localeCompare(b.title))
        }
        return [...state]
    } else if(action.type === GET_DISCOUNT_FAVORITE){
        if(action.payload){
        state.map(el => {
            el.visible = el.discont_price ? true : false;
        })
        } else {
        state.map(el => {
            el.visible = true;
            return el
        })
        }
        return [...state]
    } else if (action.type ===  SORT_BY_PRICE_FAVORITE) {
        const { min, max } = action.payload;
        state.map(el => {
            el.visible = el.price >= min && el.price <= max ? true : false;
            return el
        });
        return [...state]
    } else if (action.type === DELETE_PRODUCT_FROM_FAVORITE){
        return state.filter(elem => elem.id !== action.payload)
    } else if (action.type === DELETE_ALL_FAVORITE){
        return []
    }
    return state
}