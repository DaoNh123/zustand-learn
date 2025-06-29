import { create } from 'zustand'

type TBearStoreState = {
  bears: number,
  increasePopulation: () => void;
  removeAllBears: () => void;
  // getOwner:  () => Promise<string>;     // use "Promise" to wait for API
}

export const useBearStore = create<TBearStoreState>()((set) => ({
  bears: 0,     // initial value
  increasePopulation: () => set((state) => ({ 
    bears: state.bears + 1 
  })),
  removeAllBears: () => set({ bears: 0 }),
  // getOwner: async ()=> {
  //   const response = await fetch("https://api/github/users/1");
  //   const owner = await response.json();
  //   console.log(owner.name);
  //   return owner.name;
  // }
}));