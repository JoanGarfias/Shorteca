<script setup lang="ts">
const modeSelector = useModeSelector();

</script>

<template>

<div class="min-h-screen my-12 justify-center backdrop-blur-3xl bg-cover! bg-center! bg-no-repeat!">
    <p class="text-center font-bold text-4xl"
    :class="{'text-indigo-100': modeSelector.mode === 'dark','text-indigo-600': modeSelector.mode === 'light'}">
        Acerca de Shorteca
    </p>
    <Card class="mx-auto max-w-lg p-4 mt-8">
        <template #content>
            <div class="flex flex-col items-center gap-4 w-full">
                <img src="@@/assets/logo.svg" alt="Shorteca Logo" class="w-32 h-32 mb-4" />
                <p class="text-center text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Shorteca es una aplicación web que te permite crear enlaces cortos para compartir fácilmente tus contenidos.
                </p>
            </div>
        </template>
        <template #footer>
            <div class="flex flex-col items-center gap-4 w-full py-5">
                <p class="">¿Quieres apoyarnos?</p>
                <Button label="Donar" icon="pi pi-heart-fill" class="p-button-outlined"/>
            </div>
        </template>
    </Card>
</div>

</template>
