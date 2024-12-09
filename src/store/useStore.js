import { create } from "zustand";

const useStore = create((set) => ({
  dataIDS: [], // 상태 초기값
  setDataIDS: (newDataIDS) => set({ dataIDS: newDataIDS }), // 상태 업데이트 함수
}));

export default useStore;
