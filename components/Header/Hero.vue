<template>
  <ContentDoc v-slot="{ doc }">
    <header class="relative">
      <div class="overflow-hidden brightness-75 absolute bg-gradient-to-r from-green-400 to-blue-500 w-full h-full">
      </div>
      <div class="w-full min-h-screen flex justify-end flex-col relative">
        <!-- Header -->
        <div class="flex flex-col pl-2 lg:pl-12 pb-8 lg:pr-52 md:pr-32 pr-12 lg:pb-12 mt-48">
          <!-- Headline -->
          <div class="pb-4 min-w-full">
            <h1 class="font-semibold font-sans text-5xl lg:text-6xl text-left tracking-tight">{{ doc.title }}</h1>
          </div>
          <!-- Subtitle -->
          <div class="pr-8">
            <p class="text-sm md:text-md lg:text-lg text-left break-words tracking-tight leading-snug">{{
                subtitle
            }}</p>
          </div>
          <!-- Byline -->
          <div class="grid grid-cols-2 sm:grid-cols-4 mt-6">
            <!-- Author -->
            <div class="flex items-center w-full pb-4 lg:pb-0 justify-start gap-3 col-span-2">
              <div class="flex items-center justify-center rounded-full h-12 w-12 bg-black/50 flex-shrink-0">
                <h1 class="text-white">ATE</h1>
              </div>
              <div class="text-lg font-semibold">
                Freddy Amarante
              </div>
            </div>
            <!-- Article info -->
            <div class="flex flex-row col-span-2">
              <!-- Time to read -->
              <div class="flex flex-col w-full items-start">
                <span class="font-semibold">
                  Time to read
                </span>
                ~15 minutes
              </div>
              <!-- Article date -->
              <div class="flex flex-col w-full items-start align-start md:align-end">
                <span class="font-semibold">
                  Published
                </span>
                25.11.2022
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </ContentDoc>
</template>

<script setup lang="ts">
defineProps(['doc'])

const subtitle = ref<string>('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, et magni minima molestiae tenetur odit. Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla.')
</script>