"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

const Editor = dynamic(() => import("../../../components/editor"), {
  ssr: false,
});

export default function Home() {
  const [editorData, setEditorData] = useState({});

  const handleEditorChange = (data: any) => {
    setEditorData(data);
    console.log("Editor data:", data);
  };

  return (
    <div>
      <h1>Editor Sayfası desktop</h1>
      <Editor onChange={handleEditorChange} />
    </div>
  );
}
