<script setup lang="ts">
const modeSelector = useModeSelector();

// Variables reactivas para los campos del formulario
const username = ref('');
const fullName = ref('');
const email = ref('');
const password = ref('');
</script>

<template>
  <div
    class="px-6 py-20 md:px-20 lg:px-80 flex items-center justify-center backdrop-blur-3xl bg-cover! bg-center! bg-no-repeat!"
  >
    <Card>
      <template #content>
        <div class="px-8 md:px-12 lg:px-20 py-12 flex flex-col items-center gap-12 w-full backdrop-blur-2xl rounded-2xl max-w-sm">
          <div class="flex flex-col items-center gap-4 w-full">
            <div class="flex flex-col gap-2 w-full">
              <div class="text-center text-3xl font-medium leading-tight">Crea tu cuenta</div>
              <div class="text-center">

                <span>¿Ya tienes una cuenta?</span>
                <NuxtLink to="/login" class="cursor-pointer underline"
                :class="{'hover:text-purple-300': modeSelector.mode === 'dark'}">Inicia sesión</NuxtLink>

              </div>
            </div>
          </div>
          <div class="flex flex-col items-center gap-8 w-full">
            <div class="flex flex-col gap-6 w-full">
              <!-- Campo de Nombre de Usuario -->
              <IconField>
                <InputIcon class="pi pi-user" />
                <InputText type="text" v-model="username" class="appearance-none! border! w-full! outline-0! rounded-3xl! shadow-sm!" placeholder="Nombre de usuario" />
              </IconField>
              <!-- Campo de Nombre Completo -->
              <IconField>
                <InputIcon class="pi pi-user" />
                <InputText type="text" v-model="fullName" class="appearance-none! border! w-full! outline-0! rounded-3xl! shadow-sm!" placeholder="Nombre completo" />
              </IconField>
              <!-- Campo de Correo Electrónico -->
              <IconField>
                <InputIcon class="pi pi-envelope" />
                <InputText type="email" v-model="email" class="appearance-none! border! w-full! outline-0! rounded-3xl! shadow-sm!" placeholder="Correo electrónico" />
              </IconField>
              <!-- Campo de Contraseña -->
              <IconField>
                <InputIcon class="pi pi-lock" />
                <Password
                  v-model="password"
                  toggleMask
                  class="w-full"
                  inputClass="appearance-none! border! border-white/10! w-full! outline-0! rounded-3xl! shadow-sm!"
                  :feedback="false"
                  placeholder="Contraseña"
                />
              </IconField>
            </div>
            <Button label="Registrarse" class="w-full! rounded-3xl! bg-surface-950! border! border-surface-950! text-white! hover:bg-surface-950/80!" />
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>
