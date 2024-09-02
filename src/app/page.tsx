"use client";

import SideBar from "@/components/SideBar";
import { Editor } from "@monaco-editor/react";
import { Fragment, useRef, useState } from "react";

export default function Home() {
  const [pyodide, setPyodide] = useState(null);
  const [code, setCode] = useState("");
  const editorRef = useRef();

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
      <button className="bg-green-700 mt-5 text-white p-3 rounded hover:bg-green-500" onClick={() => runPythonCode(code)}>
        RUN
      </button>
    </div>
  );
}
