import { inject } from "vue";
import { IContainer, Symbol_NoixModel_Container } from "./Container";

export const useDispatch = (token: string) => {
  const [model, path] = token.split("/");
  const container = inject<IContainer>(Symbol_NoixModel_Container);
  if (!container) {
    throw new Error("cannot find a valid container");
  }
  return (payload: Record<string, unknown> = {}) => {
    return container.dispatch(model, path, payload);
  };
};
