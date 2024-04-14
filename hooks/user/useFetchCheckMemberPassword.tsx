import queryKeys from "@/constants/queryKeys";
import { checkMemberPassword } from "@/lib/actions/user.action";
import { useQuery } from "@tanstack/react-query";

const useFetchCheckMemberPassword = (password: string) => {
  return useQuery({
    queryKey: [queryKeys.admin.memberPassword, password],
    queryFn: () => checkMemberPassword(password),
    enabled: password !== "",
  });
};

export default useFetchCheckMemberPassword;
