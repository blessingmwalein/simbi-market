import { configureStore } from "@reduxjs/toolkit"
import partsReducer from "./features/parts-slice"
import cartReducer from "./features/cart-slice"

export const store = configureStore({
  reducer: {
    parts: partsReducer,
    cart: cartReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
