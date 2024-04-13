type Props = {
  children: React.ReactNode;
  className?: string;
};

const BasePage = ({ children, className = "" }: Props) => {
  return (
    <main
      className={`relative flex flex-col min-h-full w-full md:max-w-5xl ${className} bg-vv-lightGray md:border-x md:border-x-black/15`}>
      {children}
    </main>
  );
};

export default BasePage;
