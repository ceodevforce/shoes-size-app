import { useUserStore } from "~/store/users";
// import type { User } from "~/types/types"

export const useAuth = () => {
  let { userObj } = useUserStore();
  const email = ref("");
  const password = ref("");
  const loading = ref(false);
  const router = useRouter();

  const authUser = async () => {
    try {
      const { data, pending, refresh, error } = await useFetch(
        "/api/login",
        {
          body: {
            email: email.value,
            password: password.value,
          },
        }
      );
      userObj = data;
      router.push("/account/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  return {
    email,
    password,
    loading,
    authUser,
  };
};
