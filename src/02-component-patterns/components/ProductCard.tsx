import styles from '../styles/styles.module.css';
import { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import {
  IProductCardProps,
  IProductContextProps,
} from '../interfaces/interfaces';

export const ProductContext = createContext({} as IProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: IProductCardProps) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};
