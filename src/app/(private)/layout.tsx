import Sidebar from "@/components/ui/custom/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-svh flex bg-background">
      <aside className="h-full py-3 px-3">
        <nav className="bg-primary h-full p-4 rounded-2xl">
          <Sidebar />
        </nav>
      </aside>
      <div className="py-6 px-4 h-full border-5 border-red-100 flex-1 overflow-scroll">
        {children}
      </div>
    </main>
  );
}
