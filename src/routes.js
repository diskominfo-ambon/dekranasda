/**
 * List of page routes.
 */

import Home from '~@/pages/home';

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/produk',
    name: 'Product',
    component: () => import('~@/pages/product')
  },
  {
    path: '/post',
    name: 'Post',
    component: () => import('~@/pages/post')
  }
];