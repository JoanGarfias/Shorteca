<script setup lang="ts">
import VueQrcode from 'vue-qrcode'
const link = ref('https://example.com');
import logo from "@@/assets/logo.svg";

const toast = useToast();
const modeSelector = useModeSelector();
const qrcodeContainerRef = ref(null);

useSeoMeta({
  ogUrl: link.value,
  ogType: 'website',
  ogTitle: "Link acortado con Shorteca",
  ogDescription: "",
  ogImage: logo,
})

const shareLink = (red: string) => {
  switch(red){
    case 'whatsapp':
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(link.value)}`, '_blank');
      break;
    case 'facebook':
      window.open(`https://www.facebook.com/sharer.php?src=sp&u=${encodeURIComponent(link.value)}`, '_blank');
      break;
    case 'telegram':
      window.open(`https://t.me/share/url?url=${encodeURIComponent(link.value)}`, '_blank');
      break;
  }
}

const downloadQrCode = () => {
  setTimeout(() => {
    // 1. Accede al div contenedor a través del ref
    const container = qrcodeContainerRef.value;

    // 2. Busca la etiqueta <img> dentro del contenedor
    const imgElement = container ? container.querySelector('img') : null;

    if (imgElement && imgElement.src) {
        const dataUrl = imgElement.src;

        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'shorteca-qrcode.png';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        toast.add({
            severity: 'success',
            summary: 'Descarga exitosa',
            detail: 'El código QR ha sido descargado.',
            life: 3000
        });
    } else {
        console.error("No se pudo encontrar el elemento de imagen.");
        toast.add({
            severity: 'error',
            summary: 'Error',
            detail: 'El QR no está listo para ser descargado. Inténtalo de nuevo.',
            life: 3000
        });
    }
  }, 100);
};


const copyLink = () => {
    toast.add({
      severity: 'success',
      summary: 'Copiado',
      detail: 'Enlace copiado al portapapeles.',
      life: 1000
    })
    navigator.clipboard.writeText(link.value);
};

</script>

<template>

<Card class="mx-auto max-w-lg p-4 mt-8">
    <template #title>
    <p class="text-center">¡Has generado un enlace!</p>
    </template>
    <template #content>
        <div class="flex flex-col items-center">
            <p class="text-center">Aquí está tu enlace acortado:</p>
            <div class="flex justify-center">
                <InputText v-model="link" :value="link" readonly />
                <Button @click="copyLink">
                    <i class="pi pi-copy"></i>
                </Button>
            </div>
        </div>
        <ClientOnly>
          <div ref="qrcodeContainerRef" class="flex justify-center mt-4">
            <VueQrcode :scale="6" :value="link" tag="img" />
          </div>
          <div class="flex justify-center py-3">
            <Button label="Descargar" severity="success" variant="outlined" @click="downloadQrCode" />
          </div>
        </ClientOnly>
    </template>
    <template #footer>
        <div class="flex justify-center gap-5">
            <i class="pi pi-whatsapp lg:!text-3xl !text-2xl hover:cursor-pointer"
            :class="{'hover:text-indigo-600': modeSelector.mode == 'light', 'hover:text-indigo-300': modeSelector.mode == 'dark'}"
            @click="shareLink('whatsapp')">
            </i>

            <i class="pi pi-facebook lg:!text-3xl !text-2xl hover:cursor-pointer"
            :class="{'hover:text-indigo-600': modeSelector.mode == 'light', 'hover:text-indigo-300': modeSelector.mode == 'dark'}"
            @click="shareLink('facebook')">
            </i>

            <i class="pi pi-telegram lg:!text-3xl !text-2xl hover:cursor-pointer"
            :class="{'hover:text-indigo-600': modeSelector.mode == 'light', 'hover:text-indigo-300': modeSelector.mode == 'dark'}"
            @click="shareLink('telegram')">
            </i>
        </div>
    </template>
</Card>

</template>
