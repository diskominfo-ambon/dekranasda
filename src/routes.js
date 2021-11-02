/**
 * List of page routes.
 */

export default [
  {
    path: '/',
    name: 'Home',
    component: () => import('~@/pages/home'),
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
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('~@/pages/not-found')
  }
];