import {
  call,
  delay,
  fork,
  put,
  take,
  takeEvery,
  takeLatest,
  select,
} from "redux-saga/effects";
import * as taskTypes from "../constants/task";
import * as cartTypes from "../constants/ActionType";
import { getList } from "../apis/task";
import { STATUS_CODE } from "../constants";
import {
  fetchListProductSuccess,
  fetchListProductFailed,
  filterProductSuccess,
} from "../actions/task";
import { showLoading, hideLoading } from "../actions/ui";
import {
  addProductToCartSuccess,
  addProductToCartFailed,
  fetchListProductCartFailed,
  fetchListProductCartSuccess,
  updateQuantitySuccess,
  updateQuantityFailed,
  deleteProductInCartSuccess,
  deleteProductInCartFailed,
  updateSumQuantityInCartSuccess,
  updateSubtractionQuantityInCartSuccess,
} from "../actions/index";
import { getListCart, addCart, updateCart, deleteProduct } from "../apis/cart";

function* watchFetchListProduct() {
  while (true) {
    
    yield take(taskTypes.FETCH_PRODUCT);
    yield put(showLoading());
    yield delay(200);
    const resp = yield call(getList);
    const respData = yield call(getListCart);
    const { status, data } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(fetchListProductSuccess(data));
      yield put(fetchListProductCartSuccess(respData.data));
    } else {
      yield put(fetchListProductFailed(data));
    }
    yield put(hideLoading());
  }
}

function* filterProductSaga({ payload }) {
  yield delay(200);
  const { keyword } = payload;
  const list = yield select((state) => state.task.listProducts);
  const filterProduct = list.filter((product) =>
    product.name.trim().toLowerCase().includes(keyword.trim().toLowerCase())
  );
  yield put(filterProductSuccess(filterProduct));
}

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

function* addToCartSaga({ payload }) {
  const {
    id,
    image,
    name,
    description,
    rating,
    quantity,
    inventory,
    type,
    price,
  } = payload.product;

  const respGetData = yield call(getListCart);
  const dataCart = respGetData.data;
  var index = -1;
  index = findProductInCart(dataCart, payload.product);

  if (index !== -1) {
    var temp2 = parseInt(quantity) + parseInt(dataCart[index].quantity);
    temp2= temp2.toString();
    dataCart[index].quantity = temp2; 
    const respDataCart = yield call(updateCart, dataCart[index], dataCart[index].id);
    console.log(respDataCart.status);
    if(respDataCart.status === STATUS_CODE.SUCCESS) {
      yield put(updateQuantitySuccess(respDataCart.data, dataCart[index].quantity));
    } else {
      yield put(updateQuantityFailed(respDataCart.data));
    }
  } else {
    const resp = yield call(addCart, {
      id,
      image,
      rating,
      name,
      description,
      quantity,
      inventory,
      type,
      price,
    });
    const { data, status } = resp;
    if (status === STATUS_CODE.CREATED) {
      yield put(addProductToCartSuccess(data));
    } else {
      yield put(addProductToCartFailed(data));
    }
  }
}

function* watchFetchListCart() {
  while (true) {
    yield take(cartTypes.FETCH_PRODUCT_CART);
    yield put(showLoading());
    yield delay(200);
   
    const resp = yield call(getListCart);
    const { status, data } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(fetchListProductCartSuccess(data));
    } else {
      yield put(fetchListProductCartFailed(data));
    }
    yield put(hideLoading());
  }
}

function* updateCartSaga({ payload }) {
  const { quantity } = payload;
  const listCart = yield select((state) => state.cart.listCart);
  yield put(showLoading());
  const resp = yield call(
    updateCart,
    { quantity },
    listCart.id
  );
  const { data, status: statusCode } = resp;
  if (statusCode === STATUS_CODE.UPDATED) {
    yield put(updateQuantitySuccess(data.quantity));
  } else {
    yield put(updateQuantityFailed(data));
  }
  yield delay(200);
  yield put(hideLoading());
}
function* deleteProductInCartSaga({payload}) {
  const {id} = payload;
  yield put(showLoading());
  const resp =  yield call(deleteProduct, id);
  const {data, status: statusCode} = resp;
  if(statusCode === STATUS_CODE.SUCCESS) {
    yield put(deleteProductInCartSuccess(id));
  } else {
    yield put(deleteProductInCartFailed(data));
  }
  yield delay(200);
  yield put(hideLoading());
}

function* updateSumQuantityInCartSaga({payload}) {
  const { product } = payload;
  const respGetData = yield call(getListCart);
  const dataCart = respGetData.data;
  var index = -1;
  index = findProductInCart(dataCart, product);
  var temp = parseInt(dataCart[index].quantity);
  temp +=1;
  temp=temp.toString();
  dataCart[index].quantity = temp;
  yield put(showLoading());
  const resp = yield call(
    updateCart,
    dataCart[index],
    dataCart[index].id
  );
  const { data, status: statusCode } = resp;
  if (statusCode === STATUS_CODE.SUCCESS) {
    yield put(updateSumQuantityInCartSuccess(data));
  } else {
    yield put(updateQuantityFailed(data));
  }
  yield delay(200);
  yield put(hideLoading());
}

function* updateSubQuantityInCartSaga({payload}) {
  const { product } = payload;
  const respGetData = yield call(getListCart);
  const dataCart = respGetData.data;
  var index = -1;
  index = findProductInCart(dataCart, product);
  var temp = parseInt(dataCart[index].quantity);
  temp -=1;
  temp=temp.toString();
  dataCart[index].quantity = temp;
  yield put(showLoading());
  const resp = yield call(
    updateCart,
    dataCart[index],
    dataCart[index].id
  );
  const { data, status: statusCode } = resp;
  if (statusCode === STATUS_CODE.SUCCESS) {
    yield put(updateSubtractionQuantityInCartSuccess(data));
  } else {
    yield put(updateQuantityFailed(data));
  }
  yield delay(200);
  yield put(hideLoading());;
}

function* rootSaga() {
  yield fork(watchFetchListProduct);
  yield fork(watchFetchListCart);
  yield takeLatest(taskTypes.FILTER_PRODUCT, filterProductSaga);
  yield takeEvery(cartTypes.ADD_TO_CART, addToCartSaga);
  yield takeLatest(cartTypes.DELETE_PRODUCT_IN_CART, deleteProductInCartSaga);
  yield takeLatest(cartTypes.UPDATE_QUANTITY, updateCartSaga);
  yield takeLatest(cartTypes.UPDATE_SUM_QUANTITY_IN_CART, updateSumQuantityInCartSaga);
  yield takeLatest(cartTypes.UPDATE_SUB_QUANTITY_IN_CART, updateSubQuantityInCartSaga);
}

export default rootSaga;
