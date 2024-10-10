"use client";

import MobileViewMessage from "@/components/mobilemessage/MobileviewMessage";
import Modal from "@/components/onboarding/Modal";
import { Logo } from "@/components/ui/Icons";
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
        <div className="sm:flex sm:items-start">
          <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
            {/* <!-- Icon for newsletter --> */}
            <Logo />
          </div>
          <div className="w-full mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
              Unauthenticated user
            </h3>
            <div className="mt-2">
              <p className="text-sm text-gray-500"> Enter your email and secret key to get access!! </p>
              {/* <!-- Email input --> */}
              <input
                type="email"
                className="mt-2 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500"
                placeholder="name@example.com"
              />
              <input
                type="password"
                className="mt-2 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500"
                placeholder="***"
              />
            </div>
          </div>
        </div>
        <div className="px-4 mt-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            type="button"
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Get Access
          </button>

          <button
            onClick={closeModal}
            type="button"
            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Cancel
          </button>
        </div>
      </Modal>
    </Fragment>
  );
}