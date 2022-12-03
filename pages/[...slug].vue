<script setup>
const { slug } = useRoute().params

const story = await useAsyncStoryblok(
  slug && slug.length > 0 ? slug.join('/') : 'home',
  { version: 'draft' }
)
</script>
 
<template>
  <div class="w-screen h-screen bg-vampire">
    <StoryblokComponent v-if="story" :blok="story.content" />
  </div>
</template>