<script setup lang="ts">
import { ref } from "vue";
const modeSelector = useModeSelector();
const link = ref<string>('');
const password = ref<string>('');
const showConfiguration = ref<boolean>(false);
const typeConfig = ref();

const optionsConfig = ref([
    { label: 'Publico (cualquiera puede verlo)', value: 'public', icon: 'pi pi-globe' },
    { label: 'Privado (solo los que tienen el enlace pueden verlo)', value: 'private', icon: 'pi pi-lock' },
    { label: 'Solo yo (solo tú puedes verlo)', value: 'onlyme', icon: 'pi pi-user' },
]);

watch(typeConfig, () => {
  console.log(typeConfig.value);
});

</script>

<template>
<p class="py-2" />
<h2 class="text-xl md:text-2xl font-bold text-center">
    <span class="inline-block">Acorta enlaces gratis, fácil y seguro con</span>
    <span class="inline-block px-2 text-purple-400">Shorteca.</span>
</h2>

<div class="link-container py-4">
    <div class="flex justify-center items-center link-item max-w-xl mx-auto">
        <InputGroup>
            <InputText v-model="link" placeholder="Ingresa tu enlace" />
            <Button label="Acortar" />
        </InputGroup>
    </div>
    <div class="flex flex-row items-center p-2 gap-2 text-bold max-w-xl mx-auto" :class="{ 'text-fuchsia-300': modeSelector.mode === 'dark', 'text-fuchsia-800': modeSelector.mode === 'light' }">
        <div class="hover:cursor-pointer"
        :class="{'hover:text-purple-500': modeSelector.mode === 'dark', 'hover:text-purple-950': modeSelector.mode === 'light'}"
        @click="showConfiguration = !showConfiguration"
        >
            <i class="pi pi-cog"></i>
            <span class="mx-1">Configuración</span>
            <span class="mx-1" v-show="!showConfiguration">+</span>
            <span class="mx-1" v-show="showConfiguration">-</span>
        </div>
    </div>

    <div v-show="showConfiguration">
        <div class="flex flex-col items-start p-1 gap-2 max-w-xl mx-auto card">
            <Select v-model="typeConfig" :options="optionsConfig" optionLabel="label" optionValue="value" placeholder="Selecciona el tipo de énlace" class="w-full" />
            <div v-show="typeConfig === 'private'" class="flex flex-col py-3">
                <label for="password">Elige una contraseña:</label>
                <Password v-model="password" toggleMask v-show="typeConfig === 'private' "
                promptLabel="Elige una contraseña"
                weakLabel="Demasiado simple"
                mediumLabel="Complejidad media"
                strongLabel="Contraseña compleja"
                />
            </div>
        </div>
    </div>

    <Divider />


    <div class="mx-auto max-w-lg p-4 mt-8">
      <Card>
        <template #title>
          Apoya a Shorteca
        </template>
        <template #content>
          <p class="text-left">
            Shorteca es una plataforma gratuita para todos. Tu donación nos ayuda a mantener los servidores en funcionamiento y a seguir desarrollando nuevas funciones para la comunidad. ¡Cada contribución, por pequeña que sea, nos impulsa a seguir creciendo!
          </p>
          <div class="flex justify-center mt-4">
            <Button label="Donar" icon="pi pi-heart-fill" class="p-button-outlined"/>
          </div>
        </template>
      </Card>
    </div>

</div>

</template>
