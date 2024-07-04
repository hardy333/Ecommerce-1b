import { ReactNode, createContext, useState } from "react";
import { ProductType } from "../pages/Products";

export type cartItemType = {
  product: ProductType;
  amount: number;
};

export type cartContextType = {
  updateCart: (num: number, prod: ProductType) => void;
  cart: cartItemType[];
  clearCart: () => void;
};

export const CartConntext = createContext<null | cartContextType>(null);

const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<cartItemType[]>([]);

  // 0
  //  1
  // 1+
  const clearCart = () => {
    setCart([]);
  };

  const updateCart = (num: number, prod: ProductType) => {
    //  1) როცა ყოველი ემაუნთის გაზრდის და შემცირების დროს გვინდა რომ cart დააბდეითდეს

    // num === 0
    if (num === 0) {
      const newCart = cart.filter(
        (currItem) => currItem.product.id !== prod.id
      );
      setCart(newCart);
    }

    // num === 1
    if (num > 0) {
      const item = cart.find((currItem) => currItem.product.id === prod.id);

      if (item) {
        const newCart = cart.map((currItem) =>
          currItem.product.id !== prod.id
            ? currItem
            : { ...currItem, amount: num }
        );
        setCart(newCart);
      } else {
        setCart([...cart, { amount: num, product: prod }]);
      }
    }
  };

  return (
    <CartConntext.Provider value={{ cart, updateCart, clearCart }}>
      {children}
    </CartConntext.Provider>
  );
};

export default CartContextProvider;
