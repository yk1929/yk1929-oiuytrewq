import icon from '../assets/icons/editor.png';
import { App } from "../types.ts";

import { fullEditor } from "prism-code-editor/setups";
import Prism from "prism-code-editor/prism-core";

import "prismjs/components/prism-markup.js";
import "prismjs/components/prism-javascript.js";
import "prismjs/components/prism-typescript.js";
import "prismjs/components/prism-css.js";
import "prismjs/components/prism-scss.js";
import "prismjs/components/prism-less.js";
import "prismjs/components/prism-jsx.js";
import "prismjs/components/prism-tsx.js";

interface EditorConfig {
  path: string;
}

export default class EditorApp implements App {
  name     = 'Editor';
  pkg      = 'flow.editor';
  icon     = icon;
  version  = '1.0.0';

  constructor() {}

  async open(data?: EditorConfig) {
    const { default: fs } = await import('fs');

    const win = window.wm.createWindow({
      title: this.name,
      icon: icon,
      width: 500,
      height: 400
    });

    if (data) {
      win.setTitle('Editor - ' + data.path);

      const editor = fullEditor(
        Prism,
        win.content,
        {
          language: "html",
          theme: "github-dark",
        },
        () => console.log("ready"),
      )
    }
    
    return win;
  }
}