import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return () => (
      <div class="flex text-lg p-4 bg-gray-900 w-[500px] mt-9">
        <div class="flex basis-full sm:flex-nowrap flex-wrap bg-gray-400 rounded-md gap-4 bg-[repeating-linear-gradient(to_bottom_right,var(--tw-gradient-stops))] from-[#111827] from-[length:0_0] to-[#524774] to-[length:6px_6px] via-[#111827]">
          <div class="flex sm:basis-1/6 basis-1/3 h-16  justify-center items-center bg-violet-900 rounded-md">
            01
          </div>
          <div class="flex sm:basis-1/4 grow h-16  justify-center items-center bg-violet-500 rounded-md sm:order-2">
            03
          </div>
          <div class="flex sm:basis-1/2 basis-full h-16  justify-center items-center bg-violet-500 rounded-md">
            02
          </div>
        </div>
      </div>
    );
  },
});
