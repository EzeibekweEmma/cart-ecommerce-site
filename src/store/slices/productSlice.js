const productSlice = (set, get) => ({
    product: [],
    fetchProduct: async () => {
        const res = await fetch("https://fakestoreapiserver.reactbd.com/tech");
        set({ product: await res.json() });
    },
});

export default productSlice;
