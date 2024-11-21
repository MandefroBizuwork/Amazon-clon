import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'mycart',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += item.price;
      } else {
        state.items.push({
          id: item.id,
          title: item.title,
          price: item.price,
          image: item.image,
          description: item.description,
          rating: item.rating,
          quantity: 1,
          totalPrice: item.price,
        });
      }
      state.totalQuantity += 1;
      state.totalAmount += item.price;
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const itemIndex = state.items.findIndex((i) => i.id === id);

      if (itemIndex !== -1) {
        const item = state.items[itemIndex];
        state.totalQuantity -= item.quantity;
        state.totalAmount -= item.totalPrice;
        state.items.splice(itemIndex, 1);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
    incrementQuantity: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((i) => i.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += existingItem.price;
        state.totalQuantity += 1;
        state.totalAmount += existingItem.price;
      }
    },
    decrementQuantity: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((i) => i.id === id);

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        existingItem.totalPrice -= existingItem.price;
        state.totalQuantity -= 1;
        state.totalAmount -= existingItem.price;
      } else if (existingItem) {
        state.items = state.items.filter((i) => i.id !== id);
        state.totalQuantity -= 1;
        state.totalAmount -= existingItem.price;
      }
    },
  },
});


export const { addToCart, removeFromCart, clearCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
