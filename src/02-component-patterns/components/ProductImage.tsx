import styles from '../styles/styles.module.css';
import { useContext } from 'react';
import noImage from '../assets/no-image.jpg';
import { ProductContext } from './ProductCard';

export interface IProductImageProps {
  img?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ProductImage = ({
  img = '',
  className,
  style,
}: IProductImageProps) => {
  const { product } = useContext(ProductContext);
  let imgToShow: string;

  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  } else imgToShow = noImage;

  return (
    <img
      style={style}
      className={`${styles.productImg} ${className}`}
      src={imgToShow}
      alt="Product"
    />
  );
};
