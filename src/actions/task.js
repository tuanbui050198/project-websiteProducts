import * as productConstants from '../constants/task';

export const fetchListProduct = () => {
  return {
    type: productConstants.FETCH_PRODUCT,
  }
}

export const fetchListProductSuccess = (data) => {
  return {
    type: productConstants.FETCH_PRODUCT_SUCCESS,
    payload: {
      data,
    }
  }
}

export const fetchListProductFailed = (error) => {
  return {
    type: productConstants.FETCH_PRODUCT_FAILED,
    payload: {
      error,
    }
  }
}

export const filterProduct = keyword => ({
  type: productConstants.FILTER_PRODUCT,
  payload: {
    keyword,
  },
});

export const filterProductSuccess = (data) => ({
  type: productConstants.FILTER_PRODUCT_SUCCESS,
  payload: {
    data,
  },
});