<script setup lang="ts">

const modeDark = ref<boolean>(false);

const toggleDarkMode = () => {
  modeDark.value = !modeDark.value;
  console.log(modeDark.value)
  if(modeDark.value)
    document.documentElement.classList.add('p-dark');
  else
    document.documentElement.classList.remove('p-dark');
};
</script>

<template>
<Button label="Toggle Dark Mode" @click="toggleDarkMode()" />
</template>
