import { defineStore } from 'pinia';

export type LoadingStore = {
  isLoading: boolean;
  loadStartTime: number;
  setLoading: (value: boolean) => void;
};

export const useLoadingStore = defineStore('loading', {
  state: () : LoadingStore => ({
    isLoading: false as boolean,
    loadStartTime: Date.now(),
    setLoading(value : boolean) {
      if (value) {
        // Start loading: set isLoading to true and record start time
        this.isLoading = value;
        this.loadStartTime = Date.now();
      } else {
        // End loading: set isLoading to false only if at least 2 seconds passed
        const elapsed = Date.now() - this.loadStartTime;
        const remaining = Math.max(0, 500 - elapsed);
        setTimeout(() => { this.isLoading = value; }, remaining);
      }
    },
  }),
});