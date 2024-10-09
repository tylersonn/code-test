"use client";

import Modal from "@/components/onboarding/Modal";
import useModal from "@/hooks/modal/useModal";
import { Fragment, useRef, useState } from "react";

export default function Home() {

  const { closeModal, isForgetPasswordModalOpen, openForgetPasswordModal } = useModal();

  return (
    <div>
      <h2>HELLO</h2>

      {/* <Modal closable open={isForgetPasswordModalOpen} onClose={closeModal}>
        <h1 className="text-black">Hello world</h1>
      </Modal> */}
    </div>
  );
}
