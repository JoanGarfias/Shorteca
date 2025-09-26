const infoUser = useInfoUser();

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (!infoUser.isLogged) {
    return navigateTo('/login')
  }
})
