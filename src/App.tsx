import { defineComponent } from "vue";
import ShowUserList from "./components/ShowUserList";

export default defineComponent(() => {
  return () => <ShowUserList msg="Show reqres user list" />;
});
