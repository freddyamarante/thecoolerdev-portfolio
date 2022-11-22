<template>
  <nav class="flex flex-col lg:flex-row lg:w-16 w-full">
    <div
      class="fixed w-full h-16 lg:w-16 lg:h-screen hover:shadow-2xl bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500 z-10">
      <div>
        Logo
      </div>
    </div>
    <div class="absolute flex flex-row gap-x-16 justify-center items-center h-16 w-full z-20">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/blog">Blog</NuxtLink>
    </div>
  </nav>
</template>