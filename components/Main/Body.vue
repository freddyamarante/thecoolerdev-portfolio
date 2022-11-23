<template>
  <ContentDoc v-slot="{ doc }">
    <main
      class="prose md:prose-xl text-lg md:py-16 py-8 px-5 w-full mx-auto md:prose-code:break-normal prose-code:break-words text-gray-100">
      <ContentRenderer :value="doc" />
    </main>
  </ContentDoc>
</template>

<script setup lang="ts">
defineProps(['data'])
</script>
