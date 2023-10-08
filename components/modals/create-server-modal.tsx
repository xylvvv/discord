"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import CreateServerForm from "@/components/create-server-form";
import { useModal } from "@/hooks/use-modal-store";

const CreateServerModal = () => {
  const { isOpen, onClose, type } = useModal();

  const isModalOpen = isOpen && type === "createServer";

  const handleClose = () => {
    // form.reset();
    onClose();
  }

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Customize your server
          </DialogTitle>
          <DialogDescription className="text-center text-zinc-500">
            Give your server a personality with a name and an image. You can always change it later.
          </DialogDescription>
        </DialogHeader>
        <CreateServerForm
          footerRender={(loading) => (
            <DialogFooter className="bg-gray-100 px-6 py-4">
              <Button variant="primary" disabled={loading}>
                Create
              </Button>
            </DialogFooter>
          )}
          handleClose={onClose}
        />
      </DialogContent>
    </Dialog>
  )
};

export default CreateServerModal;
