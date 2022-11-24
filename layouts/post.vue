<template>
  <div class="relative flex flex-col lg:flex-row">
    <!-- Navbar -->
    <NavigationNavbar />
    <!-- Body -->
    <div class="flex flex-col flex-grow h-full min-h-screen bg-gray-900">
      <slot />
    </div>
  </div>
</template>
