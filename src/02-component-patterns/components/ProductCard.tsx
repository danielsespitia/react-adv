import styles from '../styles/styles.module.css';
import { ReactElement, createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import { IProduct, IProductContextProps } from '../interfaces/interfaces';

export interface IProductCardProps {
  product: IProduct;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: React.CSSProperties;
}

export const ProductContext = createContext({} as IProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
  children,
  product,
  className,
  style,
}: IProductCardProps) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};
