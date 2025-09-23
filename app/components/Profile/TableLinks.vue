<template>
    <div class="table-container">
        <DataTable :value="Links" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem">
            <Column field="originalUrl" header="Origen">
                <template #body="slotProps">
                    <div class="max-w-xs truncate-url">
                        {{ slotProps.data.originalUrl }}
                    </div>
                </template>
            </Column>
            <Column field="shortenedUrl" header="Acortado"></Column>
            <Column field="visits" header="Visitas"></Column>
            <Column field="createdAt" header="Fecha de creación"></Column>
        </DataTable>
    </div>
</template>

<script setup lang="ts">
import { Linkservice } from '@/service/LinksService';
import { onMounted, ref } from 'vue';

onMounted(() => {
    Linkservice.getLinksMedium().then((data) => (Links.value = data));
});

const Links = ref([]);

</script>

<style scoped>
.table-container {
    padding: 1rem 0;
}

.truncate-url {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>
