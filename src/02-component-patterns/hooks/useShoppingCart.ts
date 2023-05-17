import { useState } from 'react';
import { IProduct } from '../interfaces/interfaces';

interface IProductInCart extends IProduct {
  count: number;
}

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: IProductInCart;
  }>({});

  const onProductCartChange = ({
    count,
    product,
  }: // TODO: Repasar evento, por qué trae count y product?
  {
    count: number;
    product: IProduct;
  }) => {
    setShoppingCart((oldShoppingCart) => {
      const productInCart: IProductInCart = oldShoppingCart[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + count, 0) > 0) {
        // KEY: Eliminar una llave/valor de un objeto
        //TODO: Repasar (video 87)
        productInCart.count += count;
        return {
          ...oldShoppingCart,
          [product.id]: productInCart,
        };
      }

      const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      return rest;
    });
  };

  return {
    shoppingCart,
    onProductCartChange,
  };
};
