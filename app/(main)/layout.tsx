import ModalProvider from "@/components/providers/modal-provider";
import NavigationSidebar from "./_components/navigation/navigation-sidebar";

const MainLayout = async ({
  children
}: {
  children: React.ReactNode,
}) => {
  return (
    <div className="h-full">
      <div className="hidden md:flex h-full w-[72px] z-30 flex-col fixed inset-y-0">
        <NavigationSidebar />
      </div>
      <main className="md:pl-[72px] h-full">
        {children}
      </main>
      <ModalProvider />
    </div>
  );
}
 
export default MainLayout;