<template>
  <ContentDoc v-slot="{ doc }">
    <main
      class="prose prose-invert md:prose-xl text-lg md:py-16 py-8 px-2 w-full mx-auto md:prose-code:break-normal prose-code:break-words">
      <ContentRenderer :value="doc" />
    </main>
  </ContentDoc>
</template>