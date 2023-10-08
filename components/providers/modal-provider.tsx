import CreateServerModal from "@/components/modals/create-server-modal";
import EditServerModal from "@/components/modals/edit-server-modal";
import DeleteServerModal from "@/components/modals/delete-server-modal";
import CreateChannelModal from "@/components/modals/create-channel-modal";
import EditChannelModal from "@/components/modals/edit-channel-modal";
import DeleteChannelModal from "@/components/modals/delete-channel-modal";
import InviteModal from "@/components/modals/invite-modal";
import LeaveServerModal from "@/components/modals/leave-server-modal";
import MembersModal from "@/components/modals/members-modal";

const ModalProvider = () => {
  return (
    <>
      <CreateServerModal />
      <EditServerModal />
      <DeleteServerModal />
      <CreateChannelModal />
      <EditChannelModal />
      <DeleteChannelModal />
      <InviteModal />
      <LeaveServerModal />
      <MembersModal />
    </>
  );
}
 
export default ModalProvider;