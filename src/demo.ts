import { defineModel } from "@noix/model";

export default defineModel({
  name: "demo",
  state: {
    count: 0,
  },
  effect: {
    addCount() {
      this.setField("count", this.state.count + 1);
    },
  },
});
