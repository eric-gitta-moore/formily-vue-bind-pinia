import { defineComponent, h } from 'vue';
import { useForm } from '@formily/vue';
import { observer } from '@formily/reactive-vue';

export const FormPreviewer = observer(
  defineComponent({
    name: 'FormPreviewer',
    setup(props, { slots }) {
      const formRef = useForm();
      return () => {
        const form = formRef.value;
        return h(slots.default?.());
      };
    },
  })
);
