<script setup lang="ts">
definePageMeta({
  middleware: 'sanctum:auth'
});

const infoUser = useInfoUser();
import TableLinks from "@@/app/components/Profile/TableLinks.vue";

</script>

<template>
<div class="main-content">
    <div class="user-info-section">
        <div class="flex items-center gap-4">
            <i class="pi pi-user text-2xl"></i>
            <p class="text-2xl font-bold text-gray-800 dark:text-gray-200">
                {{ infoUser.name }}
            </p>
        </div>
        <div class="mt-2">
            <p class="text-lg text-gray-600 dark:text-gray-400">
                Créditos: {{ infoUser.credits }} / 150
            </p>
        </div>
    </div>

    <div class="table-section">
        <TableLinks />
    </div>
</div>
</template>

<style scoped>

.main-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 3rem 1.5rem;
    min-height: 80vh;
}

.user-info-section {
    padding-bottom: 2rem;
    border-bottom: 1px solid #e5e7eb;
}

.dark .user-info-section {
    border-bottom: 1px solid #4b5563;
}

.table-section {
    padding-top: 2rem;
}

</style>
