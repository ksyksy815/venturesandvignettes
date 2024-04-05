import Header from "@/components/shared/Header";
import Footer from "@/screens/main/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={"flex-center h-screen flex-col w-screen "}>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
