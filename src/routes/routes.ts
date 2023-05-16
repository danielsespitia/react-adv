import { lazy, LazyExoticComponent } from 'react';
import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage';

type JSXComponent = () => JSX.Element;

interface IRoute {
  to: string;
  path: string;
  name: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
}

// const Lazy1 = lazy(
//   () =>
//     import(/*webpackChunkName: "LazyPage1"*/ '../01-lazyload/pages/LazyPage1')
// );

export const routes: IRoute[] = [
  {
    to: '/',
    path: '/',
    Component: ShoppingPage,
    name: 'Shopping',
  },
  // {
  //   to: '/about',
  //   path: '/about',
  //   Component: null,
  //   name: 'About',
  // },
  // {
  //   to: '/users',
  //   path: '/users',
  //   Component: null,
  //   name: 'Users',
  // },
];
