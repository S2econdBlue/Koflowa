import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useBoardStore = defineStore("board", () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return {
    // 예시 코드
    count,
    doubleCount,
    increment,

    // state
    // getters
    // actions
  };
});
