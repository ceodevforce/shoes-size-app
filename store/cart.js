import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", () => {
  /* -------------------------------------------------------------------------- */
  /*                                    State                                   */
  /* -------------------------------------------------------------------------- */
  const cart = ref([]);
  const previousPurchases = ref([])
  const price = ref(null);
  const selectedSize = ref(null);
  const selectedColor = ref(null);

  /* -------------------------------------------------------------------------- */
  /*                                   Getter                                   */
  /* -------------------------------------------------------------------------- */
  const getCart = computed(() => {
      return cart
    const modifiedCart = {
        price,
        selectedColor,
        selectedSize
    };
    return modifiedCart;
  });

  const getCartAmount = computed(() => {
    return cart.value.length;
  });

  const getSelectedColor = computed(() => selectedColor);

  const getSelectedSize = computed(() => selectedSize);


  //TODO: Add previousPurchase to state and respective getters and actions

  // Action
  const addToCart = (item) => {
    cart.push(item);
  };

  const calculateCartTotal = () => {
    const price = getCart;
    const total = price.reduce((accu, value) => {
      return accu + value;
    }, 0);
  };


  return {
    cart,
    price,
      previousPurchases,
    selectedColor,
    selectedSize,
    getCart,
    getCartAmount,
    getSelectedColor,
    getSelectedSize,
    addToCart,
    calculateCartTotal,
  };
});
