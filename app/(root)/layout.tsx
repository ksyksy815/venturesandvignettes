export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="flex-center w-full flex-1">{children}</main>;
}
