import { defineComponent } from "vue";

export default defineComponent({
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  render: () => {
    return <h1>Hi I'm TSX</h1>;
  },
  // setup() {
  //   return () => <div>Hi I'm TSX</div>;
  // },
});
