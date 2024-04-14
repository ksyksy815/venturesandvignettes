import globalStateKeys from "@/constants/globalStateKeys";
import { UserInfo } from "@/types/user.type";
import { atom } from "recoil";

export const UserData = atom<UserInfo | null>({
  key: globalStateKeys.userData,
  default: null,
});
