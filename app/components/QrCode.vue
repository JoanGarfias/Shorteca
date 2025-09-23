<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  url: {
    type: String,
    required: true
  }
});

const qrcodeContainer = ref(null);

onMounted(async () => {
  // 1. Se importa la librería de forma dinámica y asíncrona
  //    Esto asegura que solo se cargue en el cliente
  const { default: QRCode } = await import('qrcodejs2');

  // 2. Se verifica que el contenedor exista antes de renderizar
  if (qrcodeContainer.value) {
    new QRCode(qrcodeContainer.value, {
      text: props.url,
      width: 128,
      height: 128,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });
  }
});
</script>

<template>
  <div ref="qrcodeContainer"></div>
</template>
