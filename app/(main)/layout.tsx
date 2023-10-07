import NavigationSidebar from "./_components/navigation/navigation-sidebar";

const MainLayout = async ({
  children,
  createServerModal
}: {
  children: React.ReactNode,
  createServerModal: React.ReactNode,
}) => {
  return (
    <div className="h-full">
      <div className="hidden md:flex h-full w-[72px] z-30 flex-col fixed inset-y-0">
        <NavigationSidebar />
      </div>
      <main className="md:pl-[72px] h-full">
        {children}
      </main>
      {createServerModal}
    </div>
  );
}
 
export default MainLayout;