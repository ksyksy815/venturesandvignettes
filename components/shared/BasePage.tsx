type Props = {
  children: React.ReactNode;
  className?: string;
};

const BasePage = ({ children, className = "" }: Props) => {
  return (
    <main
      className={`flex flex-col min-h-full w-full md:p-5 md:max-w-5xl ${className} pb-[150px]`}
    >
      {children}
    </main>
  );
};

export default BasePage;
