import NavigationSidebar from "./_components/navigation/navigation-sidebar";

const MainLayout = async ({
  children,
  createServerModal,
  inviteModal,
  editServerModal,
  membersModal,
  createChannelModal,
  leaveServerModal,
  deleteServerModal,
  deleteChannelModal,
  editChannelModal
}: {
  children: React.ReactNode,
  createServerModal: React.ReactNode,
  inviteModal: React.ReactNode,
  editServerModal: React.ReactNode,
  membersModal: React.ReactNode,
  createChannelModal: React.ReactNode,
  leaveServerModal: React.ReactNode,
  deleteServerModal: React.ReactNode,
  deleteChannelModal: React.ReactNode,
  editChannelModal: React.ReactNode
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
      {inviteModal}
      {editServerModal}
      {membersModal}
      {createChannelModal}
      {leaveServerModal}
      {deleteServerModal}
      {deleteChannelModal}
      {editChannelModal}
    </div>
  );
}
 
export default MainLayout;