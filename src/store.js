import create from 'zustand';
import { persist, devtools, prod } from 'zustand/middleware';
import produce from 'immer';

const userStore = (set) => ({
  user: {},
  login: (user) => {
    set(() => ({
      user: user,
    }));
  },

  logout: () => set({ user: {} }),
});
export const useUserStore = create(
  devtools(persist(userStore, { name: 'user' }))
);
