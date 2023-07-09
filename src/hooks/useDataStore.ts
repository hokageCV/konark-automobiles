import { Product } from "@/app/types";
import { create } from "zustand";

type DataStore = {
    Data: Product[];
};

const useDataStore = create<DataStore>((set) => ({
    Data: [],
    setData: (data: Product[]) => set({ Data: data }),
    addData: (data: Product) => set((state) => ({ Data: [...state.Data, data] })),
    clearData: () => set({ Data: [] }),
}));

export default useDataStore;
