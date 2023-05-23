import styles from '../styles/styles.module.css';
import { useCallback, useContext } from 'react';
import { ProductContext } from './ProductCard';

export interface IProductButtonsProps {
  className?: string;
  style?: React.CSSProperties;
}

export const ProductButtons = ({ className, style }: IProductButtonsProps) => {
  const { increaseBy, counter, maxCount } = useContext(ProductContext);

  const isMaxReached = useCallback(
    () => !!maxCount && counter === maxCount,
    [counter, maxCount]
  );

  console.log(isMaxReached(), 'max');

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        className={`${styles.buttonAdd}  ${isMaxReached() && styles.disabled}`}
        onClick={() => increaseBy(+1)}
      >
        +
      </button>
    </div>
  );
};
