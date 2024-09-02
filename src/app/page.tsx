"use client";

import { Editor } from "@monaco-editor/react";
import { useRef, useState } from "react";

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
    <div className="grid h-screen grid-cols-3">
      <div className="col-span-1">HEY</div>
      <div className="col-span-2">
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
      <button className="bg-green-700 text-white p-3 rounded hover:bg-green-600" onClick={() => runPythonCode(code)}>
        RUN
      </button>
    </div>
  );
}
