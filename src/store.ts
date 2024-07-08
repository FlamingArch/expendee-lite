import { create } from "zustand";

type Store = {
  searchExpanded: boolean;
  asCard: boolean;
  searchValue: string;
  totalValue: number;
  totalSpent: number;
  totalReceived: number;
  toggleSearch: () => void;
  setSearchValue: (newVal: string) => void;
};

const useStore = create<Store>((set) => ({
  searchExpanded: false,
  asCard: (localStorage.getItem("asCard") ?? "true") === "true",
  searchValue: "",
  totalValue: 100.23,
  totalSpent: 12.34,
  totalReceived: 87.89,
  toggleSearch: () =>
    set((state) => ({ searchExpanded: !state.searchExpanded })),
  setSearchValue: (newVal) => set(() => ({ searchValue: newVal })),
}));

export default useStore;
