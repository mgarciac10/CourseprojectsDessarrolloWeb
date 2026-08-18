<script setup lang="ts">
import { ref } from 'vue';

const title = 'Hola Vue';
const count = ref(0);

const increment = () => {
  count.value++;
};
</script>

<template>
  <section class="mt-4 mb-4">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl font-bold text-gray-800 text-center">{{ title }}</h2>
      <p class="text-center mt-4">Count: {{ count }}</p>
      <div class="flex justify-center mt-4">
        <button
          @click="increment"
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Increment
        </button>
      </div>
    </div>
  </section>
</template>
