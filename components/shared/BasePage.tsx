type Props = {
  children: React.ReactNode;
};

const BasePage = ({ children }: Props) => {
  return (
    <main className={`min-h-full w-full border-b px-2 py-4 md:max-w-5xl`}>
      {children}
    </main>
  );
};

export default BasePage;
