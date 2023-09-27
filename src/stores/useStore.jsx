import { create } from 'zustand';
import { produce } from 'immer';

const useStore = create((set, get) => {
  const setState = (fn) => set(produce(fn));
  return {
    state: {
      regions: [
        { label: 'Africa', value: 'africa' },
        { label: 'America', value: 'america' },
        { label: 'Asia', value: 'asia' },
        { label: 'Europe', value: 'europe' },
        { label: 'Oceania', value: 'oceania' },
      ],
    },
    actions: {},
  };
});

export default useStore;
