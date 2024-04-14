import BasePage from "@/components/shared/BasePage";
import SignupForm from "@/screens/signup/SignupForm";

const Page = () => {
  return (
    <BasePage>
      <section
        className={`flex flex-col px-6 gap-y-6 pt-12 pb-6 md:items-center bg-vv-lightGray`}>
        <h1 className={`h1`}>Sign Up</h1>
        <SignupForm />
      </section>
    </BasePage>
  );
};

export default Page;
