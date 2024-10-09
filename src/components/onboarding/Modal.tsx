import { cn } from "@/utils/helper";
import Image from "next/image";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { XCircleIcon } from "@heroicons/react/24/solid";

import BackDrop from "../modals/Backdrop";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  width?: string;
  closable?: boolean;
  style?: React.CSSProperties;
  className?: string;
};

const Modal = ({ open, onClose, width, children, closable = false, style, className }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [closeButtonPosition, setCloseButtonPosition] = useState({ top: 0, right: 0 });

  useEffect(() => {
    if (open && modalRef.current) {
      const rect = modalRef.current.getBoundingClientRect();
      setCloseButtonPosition({
        top: rect.top - 10,
        right: window.innerWidth - rect.right - 10,
      });
    }
  }, [open]);

  if (!open) return null;

  return (
    <Fragment>
      <BackDrop />
      <div className="fixed inset-0 z-[2020] flex items-center justify-center" onClick={onClose}>
        <div
          ref={modalRef}
          className={cn(`relative mx-3 max-h-[95vh] overflow-y-auto rounded-3xl bg-white px-6 py-4 sm:mx-0`, className)}
          onClick={(e) => e.stopPropagation()}
          style={{
            width: width ? width : "35rem",
            ...style,
          }}
        >
          {children}
        </div>
        {closable && (
          <div
            className="fixed z-[1021] cursor-pointer"
            style={{
              top: `${closeButtonPosition.top}px`,
              right: `${closeButtonPosition.right}px`,
            }}
          >
            <div className=" rounded-full p-2 hover:bg-silver-950" onClick={onClose}>
              {/* <Image src="/img/vectors/modalclose.svg" alt="Close" width={12} height={12} /> */}
              <XCircleIcon className="w-14 h-14 font-extrabold inline transition-all duration-1000 ease-in" />
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Modal;
