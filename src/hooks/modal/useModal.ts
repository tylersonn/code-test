import useModalStore from "@/zustand/modalStore";

export default function useModal() {
  const isAvatarModalOpen = useModalStore.use.isAvatarModalOpen();
  const isForgetPasswordModalOpen = useModalStore.use.isForgetPasswordModalOpen();
  const isConfigModalOpen = useModalStore.use.isConfigModalOpen();
  const openModal = useModalStore.use.openModal();
  const closeModal = useModalStore.use.closeModal();

  const openAvatarModal = () => openModal("isAvatarModalOpen");
  const openForgetPasswordModal = () => openModal("isForgetPasswordModalOpen");
  const openConfigModal = () => openModal("isConfigModalOpen");

  return {
    isAvatarModalOpen,
    isConfigModalOpen,
    isForgetPasswordModalOpen,
    openAvatarModal,
    closeModal,
    openForgetPasswordModal,
    openConfigModal,
  };
}
