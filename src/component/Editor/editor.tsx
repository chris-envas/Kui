import React, { useState, useEffect } from 'react';
import E from 'wangeditor'

export let EditorContext:any = null

const Editor: React.FC = () => {
  const [content, setContent] = useState('')
  useEffect(() => {
    EditorContext = new E("#k-editor")

    EditorContext.config.onchange = (newHtml: any) => {
      setContent(newHtml)
    }
    EditorContext.create()

    return () => {
        EditorContext.destroy()
    }
  }, [])
  
  return (
    <div>
      <div id="k-editor"></div>
    </div>
  );
}

export default Editor;