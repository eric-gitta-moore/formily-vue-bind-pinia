<template>
  <FormProvider :form="form">
    <Field name="bookList[0].previewImgs[0].desc" :component="[Input]" />
    <Child :form="val" />

    <!-- <FormConsumer>
      <template #default="scoped">
        <Child :form="scoped.form.values" />
      </template>
    </FormConsumer> -->

    <!-- <div>parent input: {{ form.values }}</div> -->
    <!-- <FormPreviewer /> -->
  </FormProvider>
  <hr />
  <pre style="text-align: left">
  {{ JSON.stringify(bookStore, null, 2) }}
  </pre>
</template>

<script setup>
import {
  ref,
  reactive,
  defineComponent,
  h,
  watch,
  onMounted,
  isReactive,
} from 'vue';
import { Input } from 'ant-design-vue';
import { createForm } from '@formily/core';
import { FormProvider, Field, FormConsumer, useForm } from '@formily/vue';
import { useObserver, observer } from '@formily/reactive-vue';
import { observable, isObservable } from '@formily/reactive';
import Child from './Child.vue';
import 'ant-design-vue/dist/reset.css';
import { storeToRefs } from 'pinia';
import { useBookStore } from '../store.js';

const bookStore = useBookStore();
const { bookCenter } = storeToRefs(bookStore);
console.log(`isReactive`, isReactive(bookCenter.value));

// 再包一层 proxy，让 formily 往这里写就完事了。把 pinia 的里面的 ref 作为 formily 的数据源
const val = observable(bookCenter.value);
console.log(`isObservable`, isObservable(val));

const form = createForm({
  values: val,
});

// watch(
//   () => form.values.input,
//   (val) => {
//     debugger;
//   },
//   {
//     immediate: true,
//   }
// );

window.form = form;
// const FormPreviewer = observer(
//   defineComponent({
//     name: 'FormPreviewer',
//     setup() {
//       const formRef = useForm();
//       return () => {
//         const form = formRef.value;
//         return h('div', [`FormPreviewer: ${JSON.stringify(form.values)}`]);
//       };
//     },
//   })
// );
</script>
