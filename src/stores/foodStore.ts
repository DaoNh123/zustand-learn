import { create } from "zustand";
import { persist, subscribeWithSelector, devtools } from "zustand/middleware";

type TFoodStoreState = {
    fish: number;
    addOneFish: () => void;
    removeOneFish: () => void;
    removeAllFish: () => void;
}

export const useFoodStore = create<TFoodStoreState>()(
    devtools(subscribeWithSelector(persist((set) => ({
    fish: 0,
    addOneFish: () => set((state) => ({fish: state.fish + 1})),
    removeOneFish: () => {
        set((state) => ({ fish: state.fish - 1}));
    },
    removeAllFish: () => {
        set({fish: 0});
    }
}),{
    name: "food store persist",
})), {
    name: "food store devtools"
}));