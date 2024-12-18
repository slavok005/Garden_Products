const LOAD_ALL_PRODUCTS = "LOAD_ALL_PRODUCTS";
const SORT_ALL_PRODUCTS = "SORT_ALL_PRODUCTS";
const GET_DISCOUNT_PRODUCTS = 'GET_DISCOUNT_PRODUCTS';
const SORT_BY_PRICE = 'SORT_BY_PRICE';
const CHANGE_STATUS_TO_LOADING = 'CHANGE_STATUS_TO_LOADING';

export const loadAllProductsAction = products => ({
  type: LOAD_ALL_PRODUCTS,
  payload: products, 
});
export const sortAllProductsAction = option_value => ({
  type: SORT_ALL_PRODUCTS,
  payload: option_value
});
export const sortByPriceAction = values => ({
  type: SORT_BY_PRICE,
  payload: values
});
export const getDiscountProductsAction = value => ({ 
  type: GET_DISCOUNT_PRODUCTS, 
  payload: value
});

export const changeStatusAction = () => ({
  type: CHANGE_STATUS_TO_LOADING
})

const defaultState = {
  data: [],
  status: 'loading',
  AllProductsTitle: {}
}

export const productsReducer = (state=defaultState, action) => {
  if (action.type === LOAD_ALL_PRODUCTS) {
    return{
      data: action.payload.map(el => ({...el, visible: true })),
      status: 'ready',
      AllProductsTitle: action.payload.products
    } 
  } else if (action.type === SORT_ALL_PRODUCTS) 
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
  } else if(action.type === GET_DISCOUNT_PRODUCTS){
    if(action.payload){
      state.data.map(el => {
        el.visible = el.discont_price ? true : false;
      })
    } else {
      state.data.map(el => {
        el.visible = true;  //прописать логику
        return el
      })
    }
    return {...state}
  } else if (action.type ===  SORT_BY_PRICE) {
    const { min, max } = action.payload;
    state.data.map(el => {
      el.visible = el.price >= min && el.price <= max ? true : false;
      return el
    });
    return {...state}
  } else if (action.type === CHANGE_STATUS_TO_LOADING){
    return {
      ...state,
      status: 'loading'
    }
  }
  return state;
}
