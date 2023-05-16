import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductButtons } from './ProductButtons';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { IProductCardHOCProps } from '../interfaces/interfaces';

export { ProductButtons } from './ProductButtons';
export { ProductTitle } from './ProductTitle';
export { ProductImage } from './ProductImage';
// export { ProductCard } from './ProductCard';

export const ProductCard: IProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
});

export default ProductCard;
