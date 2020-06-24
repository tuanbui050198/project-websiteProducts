import Products from "../containers/Products";
import Carts from "../containers/Carts";
import HomePage from "../containers/HomePage";

export const API_ENDPOINT = 'https://5eccea7644637c0016d8dd01.mockapi.io/api';

export const TYPES = {
  typeSmartPhone: "SmartPhone",
  typeLaptop: "Laptop",
};

export const ROUTES_PRODUCT = [
  {
    path: '/',
    name: 'Trang Chủ',
    exact: true,
    component: HomePage,
  },
  {
    path: '/products',
    name: 'Sản Phẩm',
    component: Products,
  },
  {
    path: '/cards',
    name: 'Giỏ Hàng',
    component: Carts,
  },
  
];

export const STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  UPDATED: 202,
};
