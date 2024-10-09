import React from "react";
import { VercelLogo } from "../ui/Icons";

const MobileViewMessage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen m-auto gap-8">
      <VercelLogo className="h-10 w-1- transition-all group-hover:scale-110 gap-4" />
      <p className="text-center text-md">For the best experience, please use the desktop version of our website.</p>
    </div>
  );
};

export default MobileViewMessage;
