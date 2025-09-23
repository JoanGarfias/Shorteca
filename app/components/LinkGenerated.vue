<script setup lang="ts">
const link = ref('https://example.com');
import logo from "@@/assets/logo.svg";
const toast = useToast();
const modeSelector = useModeSelector();

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
        <div class="flex justify-center mt-4">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALoAAAC6CAMAAAAu0KfDAAAABlBMVEX///8AAABVwtN+AAABxklEQVR4nO3QUZKDQAwD0eT+l94DgJQeCAXOtr4oGKzneb2MMebivHHSX31mbzljkC5d+hT6tj6dIcuQ+vRMDNKlS59I5zX9ZKKQ98QgXbr0X6X3f9P5NEG6dOnSSTGnk6/SpUv/PXrHEXpHHLsa6dKlT6cfq/nuMzdIly59Cv18SMGF9Wci/Y5IvyM301N9quxEshJZAy0sXbr0x9NJWRqXWH2NnnQR0qVLn0XvUL79KqVfFmmULl36FHpC9xBoByFi+ipduvQh9D4ivUllqwvwq5EuXfpEOjoK6NsJxy6iLyxduvRZ9M4lX8mSx7rieenSpQ+hry6z/TdVrl5E/1e6dOmz6H2B/kyI6TmtmhaLy0iXLv3B9FXWauXq5NSyE+nSpT+enupTyEoESto/oKVLl/54emKREemvPqf/tWCQLl36EHpfKYWc54vxLunSpU+hr2Zbn3Dkfb+yPkG6dOnPp79xTtWErmPXIV269Fn0nQ/hTHomK5FeflK6dOmz6O9N+Lgz6/XsoKVLl/6j9PS1V/LFert06dL/A31nUM13J0iXLn0inRfz9JnbM/3ipEuXPpF+DEGInN5bpEuXPpFujDEX5A/WVTvF1c+o+gAAAABJRU5ErkJggg==">
        </div>
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
