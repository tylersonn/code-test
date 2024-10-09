"use client";

import MobileViewMessage from "@/components/mobilemessage/MobileviewMessage";
import Modal from "@/components/onboarding/Modal";
import { TooltipProvider } from "@/components/ui/tooltip";
import useModal from "@/hooks/modal/useModal";
import { isMobileScreen } from "@/utils/helper";
import { Fragment, useEffect, useState } from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [windowWidth, setWindowWidth] = useState(0);
  const { closeModal, isNotLoggedInModalOpen, openAuthModal } = useModal();

  const checkUserKey = () => {
    const userKey = localStorage.getItem("userkey");
    if (!userKey) {
      openAuthModal();
    }
  };

  const handleUserKeySet = () => {
    const userKey = localStorage.getItem("userkey");
    if (userKey) {
      closeModal(); // Close modal when userkey is set
    }
  };

  useEffect(() => {
    // Check if window is defined (i.e., we're in the browser)
    if (typeof window === "undefined") {
      return;
    }

    // Function to update the width
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Call the function initially to set the width
    handleResize();
    checkUserKey();

    // Add the event listener
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };

    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {isMobileScreen(windowWidth) ? <MobileViewMessage /> : <TooltipProvider>{children}</TooltipProvider>}

      <Modal closable open={isNotLoggedInModalOpen} onClose={handleUserKeySet}>
        <h1 className="text-black">User is Not Logged in</h1>
      </Modal>
    </Fragment>
  );
}