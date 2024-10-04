"use client";

import Modal from "@/components/onboarding/Modal";
import SideBar from "@/components/SideBar";
import TopBar from "@/components/topbar/TopBar";
import useModal from "@/hooks/modal/useModal";
import { Editor } from "@monaco-editor/react";
import { Fragment, useRef, useState } from "react";

export default function Home() {
  const [pyodide, setPyodide] = useState(null);
  const [code, setCode] = useState("");
  const editorRef = useRef();
  const { closeModal, isForgetPasswordModalOpen, openForgetPasswordModal } = useModal();

  const onMount = (editor: any) => {
    editorRef.current = editor;
    editor.focus();
  };

  const runPythonCode = async (code: string) => {
    if (pyodide) {
      try {
        // const result = await pyodide.runPython(code);
        // console.log(result);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="h-screen">
      <TopBar />
      <div className="grid grid-cols-6">
        <div className="col-span-1">
          <SideBar />
        </div>
        <div className="col-span-5">
          <Editor
            height={"75vh"}
            theme="vs-dark"
            defaultLanguage="python"
            defaultValue=""
            value={code}
            onMount={onMount}
            onChange={(val) => setCode(val || "")}
          />
        </div>
      </div>
      <button className="bg-green-700 mt-5 text-white p-3 rounded hover:bg-green-500" onClick={openForgetPasswordModal}>
        RUN
      </button>

      <Modal closable open={isForgetPasswordModalOpen} onClose={closeModal}>
        <h1 className="text-black">Hello world</h1>
      </Modal>
    </div>
  );
}
