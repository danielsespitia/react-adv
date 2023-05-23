import styles from '../styles/styles.module.css';
import { ReactElement, createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import {
  IProduct,
  IProductContextProps,
  IOnChangeArgs,
  IInitialValues,
  IProductCardHandlers,
} from '../interfaces/interfaces';

export interface IProductCardProps {
  product: IProduct;
  // children?: ReactElement | ReactElement[];
  children: (args: IProductCardHandlers) => JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: IOnChangeArgs) => void;
  value?: number;
  initialValues?: IInitialValues;
}

export const ProductContext = createContext({} as IProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues,
}: IProductCardProps) => {
  const { counter, increaseBy, maxCount, isMaxCountReached, reset } =
    useProduct({
      onChange,
      product,
      value,
      initialValues,
    });

  return (
    <Provider value={{ counter, increaseBy, maxCount, product }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,
          increaseBy,
          reset,
        })}
      </div>
    </Provider>
  );
};
