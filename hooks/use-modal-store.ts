import { ChannelType, Server, Channel } from "@prisma/client";
import { create } from "zustand";

export type ModalType = 'createServer'
  | 'invite'
  | 'editServer'
  | 'members'
  | 'createChannel'
  | 'leaveServer'
  | 'deleteServer'
  | 'deleteChannel'
  | 'editChannel';

interface ModalData {
  server?: Server;
  channelType?: ChannelType;
  channel?: Channel;
}

interface ModalStore {
  type: ModalType | null;
  isOpen: boolean;
  onOpen: (type: ModalType, data?: ModalData) => void;
  onClose: () => void;
  data: ModalData;
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  isOpen: false,
  onOpen: (type, data = {}) => set({ isOpen: true, type, data }),
  onClose: () => set({ type: null, isOpen: false }),
  data: {}
}));
