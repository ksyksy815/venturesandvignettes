import { useEffect } from "react";
import useLogin from "./useLogin";
import { useRouter } from "next/navigation";

const useLoginPage = () => {
  const router = useRouter();
  const { data, isSuccess, loginUser } = useLogin();

  useEffect(() => {
    if (isSuccess) {
      router.push("/admin");
    }
  }, [isSuccess, router]);

  return {
    loginUser,
  };
};

export default useLoginPage;
