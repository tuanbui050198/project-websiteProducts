import * as types from "../constants/ActionType";

export const fetchListProductCart = () => {
  return {
    type: types.FETCH_PRODUCT_CART,
  }
}

export const fetchListProductCartSuccess = (data) => {
  return {
    type: types.FETCH_PRODUCT_CART_SUCCESS,
    payload: {
      data,
    }
  }
}

export const fetchListProductCartFailed = (error) => {
  return {
    type: types.FETCH_PRODUCT_CART_FAILED,
    payload: {
      error,
    }
  }
}

export const addProductToCart = ( product) => {
  return {
    type: types.ADD_TO_CART,
    payload: {
      product
    }
  }
}

export const addProductToCartSuccess = (data) => {
  return {
    type: types.ADD_TO_CART_SUCCESS,
    payload: {
     data,
    }
  }
}

export const addProductToCartFailed = (error) => {
  return {
    type: types.ADD_TO_CART_FAILED,
    payload: {
      error,
    }
  }
}

export const updateQuantity = (quantity) => {
  return {
    type: types.UPDATE_QUANTITY,
    payload: {
      quantity,
    }
  };
};

export const updateQuantitySuccess = (data, quantity) => {
  return {
    type: types.UPDATE_QUANTITY_SUCCESS,
    payload: {
      data,
      quantity
    },
  };
};


export const updateSumQuantityInCart = (product) => {
  return {
    type: types.UPDATE_SUM_QUANTITY_IN_CART,
    payload: {
      product,
    }
  };
};

export const updateSubQuantityInCart = (product) => {
  return {
    type: types.UPDATE_SUB_QUANTITY_IN_CART,
    payload: {
      product,
    }
  };
};

export const updateSumQuantityInCartSuccess = (data) => {
  return {
    type: types.UPDATE_SUM_QUANTITY_IN_CART_SUCCESS,
    payload: {
      data,
    },
  };
};

export const updateSubtractionQuantityInCartSuccess = (data) => {
  return {
    type: types.UPDATE_SUBTRACTION_QUANTITY_IN_CART_SUCCESS,
    payload: {
      data,
    },
  };
};

export const updateQuantityFailed = (error) => {
  return {
    type: types.UPDATE_QUANTITY_FAILED,
    payload: {
      error,
    },
  };
};

export const deleteProductInCart = (id) => {
  return {
    type: types.DELETE_PRODUCT_IN_CART,
    payload: {
      id,
    }
  };
};

export const deleteProductInCartSuccess = (data) => {
  return {
    type: types.DELETE_PRODUCT_IN_CART_SUCCESS,
    payload: {
      data,
    },
  };
};

export const deleteProductInCartFailed = (error) => {
  return {
    type: types.DELETE_PRODUCT_IN_CART_FAILED,
    payload: {
      error,
    },
  };
};