import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import productSlice from "./slices/productSlice";
import cartSlice from "./slices/cartSlice";
import favoriteSlice from "./slices/favoriteSlice";

const store = (...a) => ({
    ...productSlice(...a),
    ...cartSlice(...a),
    ...favoriteSlice(...a),
});

export const useStore = create(
    devtools(persist(store, { name: "CartStore" }), {
        enabled: true,
        name: "CartStore",
    })
);
