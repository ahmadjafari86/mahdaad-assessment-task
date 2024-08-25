import { reactive } from "vue";

export const useAxiosCounter = reactive({
  count: 0,
  setState(amount: number) {
    this.count = amount;
  },
});
