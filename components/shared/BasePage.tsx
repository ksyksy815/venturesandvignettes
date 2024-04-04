type Props = {
  children: React.ReactNode;
};

const BasePage = ({ children }: Props) => {
  return <main className={`min-h-full w-full border`}>{children}</main>;
};

export default BasePage;
