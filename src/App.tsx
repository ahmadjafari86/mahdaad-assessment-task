import { defineComponent } from "vue";
import ShowUserList from "./components/ShowUserList";
import ResponsiveShapes from "./components/ResponsiveShapes";

export default defineComponent(() => {
  return () => (
    <div>
      <ShowUserList msg="Show reqres user list" />
      <ResponsiveShapes />
    </div>
  );
});
