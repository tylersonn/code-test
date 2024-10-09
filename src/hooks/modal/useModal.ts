import useModalStore from "@/zustand/modalStore";

export default function useModal() {
  const isAvatarModalOpen = useModalStore.use.isAvatarModalOpen();
  const isForgetPasswordModalOpen = useModalStore.use.isForgetPasswordModalOpen();
  const isNotLoggedInModalOpen = useModalStore.use.isNotLoggedInModalOpen();
  const openModal = useModalStore.use.openModal();
  const closeModal = useModalStore.use.closeModal();

  const openAvatarModal = () => openModal("isAvatarModalOpen");
  const openForgetPasswordModal = () => openModal("isForgetPasswordModalOpen");
  const openAuthModal = () => openModal("isNotLoggedInModalOpen");

  return {
    isAvatarModalOpen,
    isNotLoggedInModalOpen,
    isForgetPasswordModalOpen,
    openAvatarModal,
    closeModal,
    openForgetPasswordModal,
    openAuthModal,
  };
}
