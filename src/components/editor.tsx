import React, { useEffect, useRef } from "react";

import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import InlineCode from "@editorjs/inline-code";

interface EditorProps {
  onChange: (data: any) => void;
  initialData?: any;
}

const Editor: React.FC<EditorProps> = ({ onChange, initialData }) => {
  const editorRef = useRef<EditorJS | null>(null);

  const handleToolClick = (tool: string) => {
    // Bu fonksiyon, toolbar butonlarına tıklandığında çağrılacak
    // EditorJS API'sini kullanarak ilgili aracı etkinleştirebilirsiniz
    if (editorRef.current) {
      const editor = editorRef.current;
      switch (tool) {
        case "bold":
          editor.blocks.insert("text", { text: "**Bold Text**" });
          break;
        case "italic":
          editor.blocks.insert("text", { text: "*Italic Text*" });
          break;
        // Diğer araçlar için case'ler ekleyebilirsiniz
      }
    }
  };

  useEffect(() => {
    if (!editorRef.current) {
      editorRef.current = new EditorJS({
        holder: "editorjs",

        data: initialData,
        inlineToolbar: true,
        tools: {
          header: Header,
        },
        autofocus: true,
        placeholder: "Let`s write an awesome story!",
        onChange: async () => {
          const data = await editorRef.current?.save();
          onChange(data);
        },
      });
    }

    return () => {
      if (editorRef?.current?.destroy) {
        editorRef.current.destroy();
      }
    };
  }, []);

  return (
    <>
      <div className="custom-toolbar">
        <button onClick={() => handleToolClick("bold")}>Bold</button>
        <button onClick={() => handleToolClick("italic")}>Italic</button>
        {/* Diğer toolbar butonları */}
      </div>
      <div id="editorjs" />;
    </>
  );
};

export default Editor;
