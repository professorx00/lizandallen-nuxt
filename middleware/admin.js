import { useAuth } from "~~/stores/auth";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const auth = useAuth();
  const cookie = useCookie("token");
  const response = await $fetch("/api/auth/token", {
    method: "POST",
    body: cookie.value,
  });
  console.log(response);
  if (response.statusCode == 401) {
    return navigateTo("/auth/login");
  } else {
      if(auth.user){
        if(auth.user.role !== "ADMIN"){
            return navigateTo("/");
        }
      }
    }
})
