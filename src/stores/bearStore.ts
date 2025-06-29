import { create } from 'zustand'
import { devtools } from 'zustand/middleware';

type TBearStoreState = {
  bears: number,
  increasePopulation: () => void;
  removeAllBears: () => void;
}

// devtools of different stores work independently
export const useBearStore = create<TBearStoreState>()(devtools((set) => ({
      bears: 0,     // initial value
      increasePopulation: () => set((state) => ({ 
        bears: state.bears + 1 
      })),
      removeAllBears: () => set({ bears: 0 }),
    }), {
      enabled: false,   // enable or disable "devtools" in browser
      name:"cat store", // give name for devtools so we can check it easier in redux add-on in browser
    }
  )
);

// 5 -- 2:10