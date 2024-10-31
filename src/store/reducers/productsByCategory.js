const LOAD_PROTUCTS_BY_CATEGORY = 'LOAD_PROTUCTS_BY_CATEGORY';
const SORT_ALL_BY_CATEGORY = 'SORT_ALL_BY_CATEGORY';
const GET_DISCOUNT_BY_CATEGORY = 'GET_DISCOUNT_BY_CATEGORY';
const SORT_BY_PRICE_BY_CATEGORY = 'SORT_BY_PRICE_BY_CATEGORY';
const CHANGE_STATUS_TO_LOADING_BY_CATEGORY = 'CHANGE_STATUS_TO_LOADING_BYCATEGORY';


export const loadProductsByCategoryAction = productsByCategory => ({ type: LOAD_PROTUCTS_BY_CATEGORY, payload: productsByCategory});

export const sortAllByCategoryAction = option_value => ({
    type: SORT_ALL_BY_CATEGORY,
    payload: option_value
});

export const sortByPriceByCategoryAction = values => ({
    type: SORT_BY_PRICE_BY_CATEGORY,
    payload: values
});
export const getDiscountByCategoryAction = value => ({
    type: GET_DISCOUNT_BY_CATEGORY,
    payload: value
});

export const changeStatusByCategoryAction = () => ({
    type: CHANGE_STATUS_TO_LOADING_BY_CATEGORY
})

const defaultState = {
    data: [],
    status: 'loading',
    categoryTitle: {}
}  

export const productsByCategoryReducer = (state=defaultState, action) => {
    if(action.type === LOAD_PROTUCTS_BY_CATEGORY){
        return{
            data: action.payload.data.map(el => ({...el, visible: true })),
            status: 'ready',
            categoryTitle: action.payload.category
        } 
    } else if (action.type === SORT_ALL_BY_CATEGORY) 
        {
        if(action.payload === 'default') 
        {     
            state.data.sort((a, b) => a.id - b.id)
        } 
        else if(action.payload === 'price_asc') 
        {     
            state.data.sort((a, b) => a.price - b.price)
        }  
        else if (action.payload === 'price_desc')
        {
            state.data.sort((a, b) => b.price - a.price)
        } 
        else if (action.payload === 'title')
        {
            state.data.sort((a, b) => a.title.localeCompare(b.title))
        }
        return {...state}
    } else if(action.type === GET_DISCOUNT_BY_CATEGORY){
        if(action.payload){
        state.data.map(el => {
            el.visible = el.discont_price ? true : false;
        })
        } else {
        state.data.map(el => {
            el.visible = true;
            return el
        })
        }
        return {...state}
    } else if (action.type ===  SORT_BY_PRICE_BY_CATEGORY) {
        const { min, max } = action.payload;
        state.data.map(el => {
            el.visible = el.price >= min && el.price <= max ? true : false;
            return el
        });
        return {...state}
    } else if (action.type === CHANGE_STATUS_TO_LOADING_BY_CATEGORY) {
        return {
            ...state,
            status: 'loading'
        }
    }
    return state
}
