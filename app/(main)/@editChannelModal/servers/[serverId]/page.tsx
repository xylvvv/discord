"use client";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useModal } from "@/hooks/use-modal-store";
import CreateChannelForm from "@/components/create-channel-form";

const EditChannelModal = () => {
  const { isOpen, onClose, type, data } = useModal();

  const isModalOpen = isOpen && type === "editChannel";
  const { channel } = data;

  const handleClose = () => {
    onClose();
  }

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Edit Channel
          </DialogTitle>
        </DialogHeader>
        <CreateChannelForm
          footerRender={(loading) => (
            <DialogFooter className="bg-gray-100 px-6 py-4">
              <Button variant="primary" disabled={loading}>
                Save
              </Button>
            </DialogFooter>
          )}
          handleClose={handleClose}
          channel={channel}
        />
      </DialogContent>
    </Dialog>
  )
};

export default EditChannelModal;