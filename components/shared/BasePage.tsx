type Props = {
  children: React.ReactNode;
  className?: string;
};

const BasePage = ({ children, className = "" }: Props) => {
  return (
    <main
      className={`flex flex-col min-h-full w-full md:max-w-5xl ${className} bg-white md:border-x md:border-x-black/15`}
    >
      {children}
    </main>
  );
};

export default BasePage;
