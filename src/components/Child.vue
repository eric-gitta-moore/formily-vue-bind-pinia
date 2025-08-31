<template>
  <!-- <div>useForm: {{ formRef.values }}</div> -->
  <div>vModel: {{ form.input }}</div>
  <!-- <div>input: {{ input }}</div> -->
  <div>text: {{ text }}</div>
</template>

<script setup>
import { ref, computed, getCurrentInstance, nextTick, defineProps } from 'vue';
import { useObserver } from '@formily/reactive-vue';
import { FormProvider, Field, FormConsumer, useForm } from '@formily/vue';

const props = defineProps({
  text: {
    type: String,
  },
});

// const vm = getCurrentInstance();
//
// useObserver();
// const test = ref(1);

const form = defineModel('form');
// const formRef = useForm();
// const val = computed(() => form.value.values);
// const input = computed(() => val.value.input);

// window.form = form;
</script>
