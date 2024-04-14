import Auth from "./Auth";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Auth>{children}</Auth>
    </>
  );
};

export default Layout;
