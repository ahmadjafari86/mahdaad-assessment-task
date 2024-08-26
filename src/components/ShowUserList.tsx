import { defineComponent } from "vue";
import { useFetchData } from "@/composables/useFetchData";
import { useAxiosCounter } from "@/composables/state";
import "@/assets/styles/UserListPage.css";

export default defineComponent({
  name: "ShowUserList",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const url = "https://reqres.in/api/users?page=1";
    const wrongUrl = "https://reqres.in/apiiiiii/users?page=2";
    const { data, error, loading, fetchData } = useFetchData();

    const handleSuccessFetch = () => {
      fetchData(url);
    };
    const handleFailureFetch = () => {
      fetchData(wrongUrl);
    };
    return () => (
      <div>
        <h2>{props.msg}</h2>
        <div>
          <div class="btn-wrapper">
            <button
              class="success-btn"
              disabled={loading.value}
              onClick={handleSuccessFetch}
            >
              Fetch Data
            </button>
            <button
              class="danger-btn"
              disabled={loading.value}
              onClick={handleFailureFetch}
            >
              Simulate data fetching failure
            </button>
          </div>
          <div class="user-list-container mt-5">
            {data.value?.length && (
              <ul>
                {data.value.map((item) => (
                  <li key={item.id}>
                    ID: {item.id} Email: {item.email}
                  </li>
                ))}
              </ul>
            )}
          </div>
          {error.value && <p class="error">{error.value}</p>}
          {loading.value && <p>Loading... try: {useAxiosCounter.count}</p>}
        </div>
      </div>
    );
  },
});
