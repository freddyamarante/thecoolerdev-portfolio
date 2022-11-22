<template>
  <div class="relative flex flex-col lg:flex-row">
    <!-- Navbar -->
    <NavigationNavbar />
    <!-- Body -->
    <main class="flex flex-col flex-grow h-full min-h-screen">
      <slot />
    </main>
  </div>
</template>
