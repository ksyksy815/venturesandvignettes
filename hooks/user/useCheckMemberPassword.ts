import { useEffect, useState } from "react";
import useFetchCheckMemberPassword from "./useFetchCheckMemberPassword";
import { useRouter } from "next/navigation";

const useCheckMemberPassword = (password: string) => {
  const router = useRouter();
  const { data, isSuccess } = useFetchCheckMemberPassword(password);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  useEffect(() => {
    if (isSuccess && data === false) {
      setShowErrorMessage(true);
      return;
    }

    if (data === true) {
      router.push("/admin/user/new");
    }
  }, [isSuccess, data, router]);

  return {
    data,
    showErrorMessage,
  };
};

export default useCheckMemberPassword;
