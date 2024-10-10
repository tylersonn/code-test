import { create } from "zustand";
import createSelectors from "@/zustand/config/createSelector";

interface ModalState {
  isAvatarModalOpen: boolean;
  isForgetPasswordModalOpen: boolean;
  isNotLoggedInModalOpen: boolean;
}

interface ModalStoreState extends ModalState {
  //   openModal: (kind: keyof Omit<ModalState, "space">) => void;
  openModal: (kind: keyof ModalState) => void;
  closeModal: () => void;
}

const initialState = {
  isAvatarModalOpen: false,
  isForgetPasswordModalOpen: false,
  isNotLoggedInModalOpen: false,
};

const modalStore = create<ModalStoreState>()((set) => ({
  ...initialState,
  openModal: (kind: keyof ModalState) =>
    set(() => ({
      [kind]: true,
    })),
  closeModal: () =>
    set(() => ({
      ...initialState,
    })),
  // setSpace: (space: Spaces) => set(() => ({ space })),
  // clearSpace: () => set(() => ({ space: null })),
}));

const useModalStore = createSelectors(modalStore);
export default useModalStore;
