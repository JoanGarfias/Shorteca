<script setup lang="ts">
import { config } from "@@/app/config/env"
const modeSelector = useModeSelector();
const infoUser = useInfoUser();

const username = ref('');
const email = ref('');
const password = ref('');

const login = () => {
  infoUser.isLogged = true;
  console.log('Login');
  loginPost();
}

const loginPost = async () => {
  try {
    await useSanctumFetch(config.API_BASE + '/api/login', {
      method: 'POST',
      body: {
        username: username.value,
        email: email.value,
        password: password.value
      }
    });
  } catch (error) {
    console.error(error);
  }
}

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
                    <div class="text-center text-3xl font-medium leading-tight">Ingresa a Shorteca</div>
                    <div class="text-center">

                        <span>¿No tienes una cuenta?</span>
                        <NuxtLink to="/register" class="cursor-pointer underline"
                        :class="{'hover:text-purple-300': modeSelector.mode === 'dark'}">Regístrate</NuxtLink>

                    </div>
                </div>
            </div>
            <div class="flex flex-col items-center gap-8 w-full">
                <div class="flex flex-col gap-6 w-full">
                    <IconField>
                        <InputIcon class="pi pi-user" />
                        <InputText type="text"
                        class="appearance-none! border! w-full! outline-0! rounded-3xl! shadow-sm!"
                        placeholder="Usuario"
                        v-model="username"/>
                    </IconField>
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
                <Button label="Ingresar" class="w-full! rounded-3xl! bg-surface-950! border! border-surface-950! text-white! hover:bg-surface-950/80!"
                @click="login"
                />
            </div>
            <a class="cursor-pointer">Olvidé mi contraseña</a>
        </div>
        </template>
        </Card>
    </div>
</template>
