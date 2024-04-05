import BasePage from "@/components/shared/BasePage";
import ContactInfo from "@/screens/about/ContactInfo";
import MissionStatement from "@/screens/about/MissionStatement";
import Pictures from "@/screens/about/Pictures";

const Page = () => {
  return (
    <BasePage>
      <MissionStatement />
      <Pictures />
      <ContactInfo />
    </BasePage>
  );
};

export default Page;
