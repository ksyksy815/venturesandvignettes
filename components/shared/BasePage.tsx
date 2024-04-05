type Props = {
  children: React.ReactNode;
  className?: string;
};

const BasePage = ({ children, className = "" }: Props) => {
  return (
    <main
      className={`flex flex-col min-h-full w-full border-b px-2 py-4 md:max-w-5xl ${className}`}
    >
      {children}
    </main>
  );
};

export default BasePage;
