import LoginForm from "./LoginForm";
import Link from "next/link";

const LoginPage = () => {
  return (
    <section
      className={`flex flex-col px-6 gap-y-6 pt-12 pb-6 md:items-center`}>
      <LoginForm />
      <Link
        href={`/sign-up`}
        className={`text-sm hover:underline hover:font-medium`}
        prefetch={false}>
        Sign up
      </Link>
    </section>
  );
};

export default LoginPage;
