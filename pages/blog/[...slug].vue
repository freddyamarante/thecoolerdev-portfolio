<template>
  <ContentDoc v-slot="{ doc }">
    <!-- Hero (Article title, date, info, banner) -->
    <HeaderHero :markdown="doc" />
    <!-- Divider -->
    <MainDivider />
    <!-- Body -->
    <MainBody :markdown="data" />
  </ContentDoc>
</template>

<script setup lang="ts">
// Setting layout as 'post'
definePageMeta({
  layout: 'post',
})

// Get markdown data
const { data } = await useAsyncData('article-example', () => queryContent('/article-example').findOne())
</script>