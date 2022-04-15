import { inject, onMounted, onUnmounted, ref } from "vue";
import { IContainer, Symbol_NoixModel_Container } from "./Container";

export const useModel = <T>(token: string) => {
  const [model, path] = token.split("/");
  const container = inject<IContainer>(Symbol_NoixModel_Container);
  if (!container) {
    throw new Error("cannot find a valid container");
  }
  const state = ref<T>();
  let release: () => void;
  onMounted(() => {
    release = container.effect({
      model,
      token: path,
      handle: (val: T) => {
        state.value = val;
      },
    });
  });
  onUnmounted(() => {
    if (release) {
      release();
    }
  });
  return state;
};
