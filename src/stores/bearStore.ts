import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

type TBearStoreState = {
  bears: number,
  color: string,
  size: string,
  increasePopulation: () => void;
  removeAllBears: () => void;
  reset: ()=> void;
}

// devtools of different stores work independently
export const useBearStore = create<TBearStoreState>()(
  persist((set) => ({
    bears: 0,     // initial value
    color: "red",
    size: "big",
    increasePopulation: () => set((state) => ({ 
      bears: state.bears + 1 
    })),
    removeAllBears: () => set({ bears: 0 }),
    reset: ()=> set(state => ({
      bears: state.bears,
      color: "red",
      size: 'big',
    }))
  }),{
    name: "bear store",  // second param for "persist" and needed to be an unique name
    storage: createJSONStorage(() => sessionStorage), // default is "local storage"
    // partialize: (state) => ({bears: state.bears})     // save some fields of "state"

    partialize: (state) =>      // only exclude some fields from a state with multi fields
      Object.fromEntries(
        Object.entries(state).filter(([key]) => !['size', 'color'].includes(key)),
      ),
  })
);

