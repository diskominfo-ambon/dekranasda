/**
 * List of page routes.
 */

import Home from '~@/pages/home';
import Product from '~@/pages/product';
import Post from '~@/pages/post';

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/produk',
    name: 'Product',
    component: Product
  },
  {
    path: '/post',
    name: 'Post',
    component: Post
  }
];