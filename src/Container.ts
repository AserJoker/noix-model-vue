import { IEffect, IModel, useContainer } from "@noix/model";
import { defineComponent, PropType, provide } from "vue";
export interface IContainer {
  effect: (eff: IEffect) => () => void;
  dispatch: (
    modelName: string,
    name: string,
    payload: Record<string, unknown>
  ) => void | Promise<void>;
}
export const Symbol_NoixModel_Container = Symbol("@noix/model.container");
export default defineComponent({
  props: {
    models: {
      type: Object as PropType<IModel<any>[]>,
      required: true,
    },
  },
  setup(props, ctx) {
    const container = useContainer(props.models);
    provide(Symbol_NoixModel_Container, container);
    return () => {
      return ctx.slots.default && ctx.slots.default();
    };
  },
});
