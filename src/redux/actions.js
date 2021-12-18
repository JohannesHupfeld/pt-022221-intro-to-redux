export const ADD_TO_CART = "ADD_TO_CART" // easier to debug a variable than a mistake in a string 

export const startLoading = () => { // action creator -> functions that return actions objects
  return {
    type: "START_LOADING"
  }
}
// action creator
export const addToCart = (item) => {
  return { // just renturnin an object 
    type: ADD_TO_CART,
    payload: item
  }
}