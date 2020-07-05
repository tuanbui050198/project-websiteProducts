import * as types from "../constants/ActionType";
import { toastError } from "../helpers/toastHelper";
import { toast } from "react-toastify";
import * as Message from "../constants/Message";

const initialState = {
  listCart: [],
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART: {
      return {
        ...state,
      };
    }
    case types.ADD_TO_CART_SUCCESS: {
      const {listCart} = action.payload;
      toast.success(Message.MSG_ADD_TO_CART_SUCCESS);
      return {
        ...state,
        listCart: listCart,
      }
    }
    case types.ADD_TO_CART_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
      };
    }
    case types.FETCH_PRODUCT_CART: {
      return {
        ...state,
        listCart: [],
      };
    }
    case types.FETCH_PRODUCT_CART_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listCart: data,
      };
    }
    case types.FETCH_PRODUCT_CART_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
        listCart: [],
      };
    }
    case types.UPDATE_QUANTITY: {
      return {
        ...state,
      };
    }
    case types.UPDATE_QUANTITY_SUCCESS: {
      toast.success(Message.MSG_ADD_TO_CART_SUCCESS);
      const {listCart} = action.payload;
      return {
        ...state,
        listCart: listCart,
      };
    }
    case types.UPDATE_SUM_QUANTITY_IN_CART: {
      return {
        ...state,
      };
    }
    case types.UPDATE_SUB_QUANTITY_IN_CART: {
      return {
        ...state,
      };
    }
    case types.UPDATE_SUM_QUANTITY_IN_CART_SUCCESS: {
      toast.success(Message.MSG_UPDATE_CART_SUCCESS);
      const {listCart} = action.payload;
      return {
        ...state,
        listCart: listCart,
      };
    }
    case types.UPDATE_SUBTRACTION_QUANTITY_IN_CART_SUCCESS: {
      toast.success(Message.MSG_UPDATE_CART_SUCCESS);
      const {listCart} = action.payload;
      return {
        ...state,
        listCart: listCart,
      };
    }
    case types.UPDATE_QUANTITY_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
      };
    }
    case types.DELETE_PRODUCT_IN_CART: {
      return {
        ...state,
      };
    }
    case types.DELETE_PRODUCT_IN_CART_SUCCESS: {
      const { data } = action.payload; // id
      toast.success(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
      return {
        ...state,
        listCart: state.listCart.filter((item) => item.id !== data),
      };
    }
    case types.DELETE_PRODUCT_IN_CART_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default cart;
