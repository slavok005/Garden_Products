const LOAD_ALL_PRODUCTS = "LOAD_ALL_PRODUCTS";
const SORT_ALL_PRODUCTS = "SORT_ALL_PRODUCTS";
const GET_DISCOUNT_PRODUCTS = 'GET_DISCOUNT_PRODUCTS';
const SORT_BY_PRICE = 'SORT_BY_PRICE';

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
export const productsReducer = (state = [], action) => {
  if (action.type === LOAD_ALL_PRODUCTS) {
    return action.payload.map(el => ({...el, visible:
      true
    }))
  } else if (action.type === SORT_ALL_PRODUCTS) 
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
  } else if(action.type === GET_DISCOUNT_PRODUCTS){
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
  } else if (action.type ===  SORT_BY_PRICE) {
    const { min, max } = action.payload;
    state.map(el => {
      el.visible = el.price >= min && el.price <= max ? true : false;
      return el
    });
    return [...state]
  }
  return state;
}
