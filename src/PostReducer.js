export const DEFAULT_STATE = {
  cart: [],
  isLoading: false,
  itemsCount: 0,
  totalAmount: 0,
};

export const ACTION_TYPES = {
  Loading: "Loading",
  error: "error",
  setCartData: "cartData",
  increase: "increase",
  decrease: "decrease",
  setTotals: "setTotals",
  delete: "delete",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.loading:
      return {
        ...state,
        loading: true,
      };

    case ACTION_TYPES.setCartData: {
      return {
        ...state,
        loading: false,
        cart: action.payload,
      };
    }

    case ACTION_TYPES.increase: {
      let tempCart = state.cart.map((item) => {
        if (item.id === action.payload)
          return { ...item, amount: item.amount + 1 };
        return item;
      });
      return {
        ...state,
        cart: tempCart,
      };
    }

    case ACTION_TYPES.decrease: {
      let tempCart = state.cart
        .map((item) => {
          if (item.id === action.payload)
            return { ...item, amount: item.amount - 1 };
          return item;
        })
        .filter((item) => item.amount !== 0);
      return {
        ...state,
        cart: tempCart,
      };
    }

    case ACTION_TYPES.setTotals: {
      const { totalPrice, totalAmount } = state.cart.reduce(
        (cartTotal, item) => {
          const { price, amount } = item;
          cartTotal.totalPrice += price * amount;
          cartTotal.totalAmount += amount;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalAmount: 0,
        }
      );
      return {
        ...state,
        itemsCount: totalAmount,
        totalAmount: totalPrice.toFixed(2),
      };
    }
    case ACTION_TYPES.delete: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    default:
      return state;
  }
};
