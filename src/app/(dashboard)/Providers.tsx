"use client";

import MobileViewMessage from "@/components/mobilemessage/MobileviewMessage";
import { TooltipProvider } from "@/components/ui/tooltip";
import { isMobileScreen } from "@/utils/helper";
import { Fragment, useEffect, useState } from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [windowWidth, setWindowWidth] = useState(0);

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

    // Add the event listener
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <Fragment>{isMobileScreen(windowWidth) ? <MobileViewMessage /> : <TooltipProvider>{children}</TooltipProvider>}</Fragment>;
}
