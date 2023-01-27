import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", () => {
  /* -------------------------------------------------------------------------- */
  /*                                    State                                   */
  /* -------------------------------------------------------------------------- */
  const cart = ref([]);
  const price = ref(null);
  const selectedSize = ref(null);
  const selectedColor = ref(null);

  /* -------------------------------------------------------------------------- */
  /*                                   Getter                                   */
  /* -------------------------------------------------------------------------- */
  const getCart = computed(() => {
    const { id, price } = cart;
    const modifiedCart = {};
    return modifiedCart;
  });

  const getCartAmount = computed(() => {
    return cart.value.length;
  });

  const getSelectedColor = computed(() => selectedColor);

  const getSelectedSize = computed(() => selectedSize);

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
