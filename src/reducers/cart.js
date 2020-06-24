import * as types from "../constants/ActionType";
import { toastError } from "../helpers/toastHelper";
import { toast } from "react-toastify";
import * as Message from "../constants/Message";

const initialState = {
  listProductCart: [],
  listCart: [],
};

var findProductInCart = (cart, product) => {
  var index = -1;
  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].name === product.name) {
        index = i;
        break;
      }
    }
  }
  return index;
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART: {
      return {
        ...state,
      };
    }
    case types.ADD_TO_CART_SUCCESS: {
      const { data } = action.payload;
      toast.success(Message.MSG_ADD_TO_CART_SUCCESS);
      return {
        ...state,
        listProductCart: data,
      };
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
      // const { data, quantity } = action.payload;
      // const { listCart } = state;
      // var index = -1;
      // index = findProductInCart(listCart, data);
      // // listCart[index].quantity += data.quantity;
      // const quantityCartIndex = listCart[index].quantity;
      // var sumQuantity = parseInt(quantityCartIndex) + parseInt(quantity);
      // // [...listCart[index]=data];
      // sumQuantity= sumQuantity.toString();
      // // const newList = [
      //   listCart[index].quantity = sumQuantity;
      // //   ...listCart.slice(0, index),
      // //   data,
      // //   ...listCart.slice(index + 1),
      // // ];
      // const newList = [...listCart];
      // console.log('newList', state);
      return {
        ...state,

        // listCart: newList,
        // {listCart[index]} :data,
      };
    }
    case types.UPDATE_QUANTITY_IN_CART_SUCCESS: {
      const { data, quantity } = action.payload;
      const { listCart } = state;
      var index = -1;
      index = findProductInCart(listCart, data);
      const quantityCartIndex = listCart[index].quantity;
      var sumQuantity = parseInt(quantityCartIndex) + parseInt(quantity);
      sumQuantity = sumQuantity.toString();
      listCart[index].quantity = sumQuantity;
      // const newList = [...listCart];
      return {
        ...state,

        // listCart: newList,
        // {listCart[index]} :data,
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
      const { data } = action.payload;
      const { listCart } = state;
      var index = -1;
      index = findProductInCart(listCart, data);
      const quantityCartIndex = listCart[index].quantity;
      var sumQuantity = parseInt(quantityCartIndex) + 1;
      sumQuantity = sumQuantity.toString();
      listCart[index].quantity = sumQuantity;

      const newList = [...listCart];
      toast.success(Message.MSG_UPDATE_CART_SUCCESS);
      return {
        ...state,
        listCart: newList,
      };
    }
    case types.UPDATE_SUBTRACTION_QUANTITY_IN_CART_SUCCESS: {
      const { data } = action.payload;
      const { listCart } = state;
      var index = -1;
      index = findProductInCart(listCart, data);
      const quantityCartIndex = listCart[index].quantity;
      var subQuantity = parseInt(quantityCartIndex) - 1;
      subQuantity = subQuantity.toString();
      listCart[index].quantity = subQuantity;
      const newList = [...listCart];
      toast.success(Message.MSG_UPDATE_CART_SUCCESS);
      return {
        ...state,
        listCart: newList,
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
