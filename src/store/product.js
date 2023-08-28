import { create } from "zustand";
import { persist } from "zustand/middleware";

const store = (set) => ({
    product: [],
    fetchProduct: async () => {
        const res = await fetch("https://fakestoreapiserver.reactbd.com/tech");
        set({ product: await res.json() });
    },
});

export const useProduct = create(persist(store, { name: "useProduct" }));
