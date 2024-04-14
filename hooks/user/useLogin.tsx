import { LOGIN_COOKIE } from "@/constants";
import queryKeys from "@/constants/queryKeys";
import { loginUser as requestLogin } from "@/lib/actions/user.action";
import { UserData } from "@/store/user.store";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useSetRecoilState } from "recoil";

const useLogin = () => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const [_, setCookie] = useCookies([LOGIN_COOKIE]);
  const setUserInfoAsGlobalState = useSetRecoilState(UserData);

  const { data, isSuccess, status } = useQuery({
    queryKey: [queryKeys.user.login, userInfo.email, userInfo.password],
    queryFn: () => requestLogin(userInfo.email, userInfo.password),
    enabled: userInfo.email !== "" && userInfo.password !== "",
  });

  useEffect(() => {
    if (status === "success" && data) {
      const cookieValue = data.headers["Set-Cookie"];

      if (cookieValue) {
        const token = cookieValue.split("=")[1];
        setCookie(LOGIN_COOKIE, token, { path: "/" });
      }

      if (data.user) {
        setUserInfoAsGlobalState(data.user);
      }
    }
  }, [status, data, setCookie, setUserInfoAsGlobalState]);

  const loginUser = (email: string, password: string) => {
    setUserInfo({ email, password });
  };

  return {
    data,
    isSuccess,
    loginUser,
  };
};

export default useLogin;
