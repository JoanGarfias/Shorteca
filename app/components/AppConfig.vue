<script setup>
const toggleDarkMode = () => {
  document.documentElement.classList.toggle('p-dark');
};
</script>

<template>
<Button label="Toggle Dark Mode" @click="toggleDarkMode()" />
</template>
