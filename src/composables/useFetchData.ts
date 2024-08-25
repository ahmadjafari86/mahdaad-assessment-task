import { ref } from "vue";
import axios from "axios";
import { User } from "../assets/types/User";
import { useAxiosCounter } from "../composables/state";

export function useFetchData() {
  let data = ref<{ userList: User[] } | null>(null);
  const error = ref<unknown>(null);
  const loading = ref(false);

  const fetchData = async (url: string) => {
    try {
      useAxiosCounter.count = 1;
      data.value = null;
      error.value = null;
      loading.value = true;
      const { data: response } = await axios.get(url);
      data.value = { userList: response.data };
      error.value = null;
    } catch (err) {
      data.value = null;
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  return { data, error, loading, fetchData };
}
