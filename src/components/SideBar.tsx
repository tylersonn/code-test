import React, { useState } from "react";
import { FolderIcon, ChevronRightIcon, ChevronDownIcon, DocumentCheckIcon } from "@heroicons/react/24/solid";
import TransitionFadeUp from "./Framer/TansitionFadeup";

// Example folders array with multiple objects
const folders = [
  {
    folder: "sidekicks",
    files: ["index.css", "index.js"],
  },
  {
    folder: "projects",
    files: ["project1.js", "project2.js"],
  },
  {
    folder: "documents",
    files: ["resume.pdf", "cover_letter.pdf"],
  },
];

const SideBar = () => {
  // State to track which folder is open
  const [openFolders, setOpenFolders] = useState<{ [key: string]: boolean }>({});

  const toggleFolder = (folderName: string) => {
    setOpenFolders((prev) => ({
      ...prev,
      [folderName]: !prev[folderName],
    }));
  };

  return (
    <div>
      {folders.map((folder) => (
        <div key={folder.folder}>
          {/* Top Level View */}
          <div onClick={() => toggleFolder(folder.folder)} className="flex flex-row items-center hover:underline cursor-pointer">
            {openFolders[folder.folder] ? (
              <ChevronDownIcon className="w-5 h-5 font-extrabold inline transition-all duration-1000 ease-in" />
            ) : (
              <ChevronRightIcon className="w-5 h-5 font-extrabold inline transition-all duration-1000 ease-in" />
            )}
            <FolderIcon className="w-6 h-6 text-blue-500" />
            <p className="ml-1 pt-1">{folder.folder}</p>
          </div>

          {/* Files View */}
          {openFolders[folder.folder] && (
            <TransitionFadeUp>
              <div className="pl-8">
                {folder.files.map((file) => (
                  <p key={file} className="group cursor-pointer">
                    <DocumentCheckIcon className="w-4 h-4 inline opacity-80" />
                    <span className="group-hover:underline pl-2">{file}</span>
                  </p>
                ))}
              </div>
            </TransitionFadeUp>
          )}
        </div>
      ))}
    </div>
  );
};

export default SideBar;
