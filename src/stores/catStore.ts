import { create } from "zustand";

type TCatStoreState = {
    cats: {
        bigCats: number,
        smallCats: number,
    },
    increaseBigCats: ()=> void,
    increaseSmallCats: ()=> void,
};

export const useCatStore = create<TCatStoreState>()
((set) => ({
    cats: {
        bigCats: 0,
        smallCats: 0,
    },
    increaseBigCats: () => 
        set((state) => ({
            cats: {
                ...state.cats,
                bigCats: state.cats.bigCats + 1,
            },
        })),
    increaseSmallCats: () => 
        set((state) => ({
            cats: {
                ...state.cats,
                smallCatsCats: state.cats.smallCats + 1,
            },
        })),
}))